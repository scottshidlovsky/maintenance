import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';

/**
 * Dropdown component that currently wraps materials form field and select components. Will allow me to replace
 * the dropdown implementation in the future with a homegrown one.
 *
 * Usage:
 *  <cm-dropdown>
 *    <cm-dropdown-option value='value'>Value</cm-dropdown-option>
 *    <cm-dropdown-option value='value1'><span>Custom Markup for option</span></cm-dropdown-option>
 *  </cm-dropdown>
 *
 *  @Input required - boolean on whether the control is required or not
 *
 *  NOTE: Must be used with angular forms
 */
@Component({
  selector: 'cm-dropdown-option',
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class DropdownOptionComponent {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  @Input() value: any;
}

@Component({
  selector: 'cm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DropdownComponent,
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor, Validator, AfterViewInit, OnDestroy {
  _required = false;
  @Input()
  set required(value: any) {
    this._required = coerceBooleanProperty(value);
  }
  get required() {
    return this._required;
  }

  @ContentChildren(DropdownOptionComponent) options: QueryList<DropdownOptionComponent>;

  _internalControl = new FormControl();

  _destroyed$ = new ReplaySubject(1);

  constructor() {
    this._internalControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe(value => {
      this.onChange(value);
    });
  }

  ngOnDestroy() {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      // Rerun validation after form control has attached
      this.onValidatorChange();
    });
  }

  onChange = value => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this._internalControl.disable() : this._internalControl.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this._internalControl.errors;
  }

  writeValue(obj: any): void {
    this._internalControl.setValue(obj, { emitEvent: false });
  }
}
