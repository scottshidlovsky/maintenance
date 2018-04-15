import { AfterViewInit, Attribute, Component, Injector, Input, OnDestroy, OnInit, Self } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';
import { CmErrorStateMatcher } from '../error-state-matcher';

/**
 * Input component that currently wraps materials form field and input components. Will allow me to replace
 * the input implementation in the future with a homegrown one.
 *
 * Usage:
 *  <cm-input label='Input Label' required [formControl]='control'>
 *  </cm-input>
 *
 *  @Input required - boolean on whether the control is required or not
 *  @Input label - label for form control
 *
 *  NOTES: Must be used with angular forms
 */
@Component({
  selector: 'cm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator, AfterViewInit, OnDestroy, OnInit {
  @Input() label = '';

  _required = false;
  @Input()
  set required(value: any) {
    this._required = coerceBooleanProperty(value);
  }
  get required(): any {
    return this._required;
  }

  _internalControl = new FormControl();

  _destroyed$ = new ReplaySubject(1);

  _errorStateMatcher: ErrorStateMatcher;

  constructor(private _injector: Injector, @Attribute('type') public type = 'text') {
    this._internalControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe(value => {
      this.onChange(value);
    });
  }

  ngOnDestroy() {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  ngOnInit() {
    // injecting NgControl with validator interface results in a circle dependency
    // WARNING: we can't use @Self annonation when getting from the injector so if there isn't a control
    // associated with the component, it could reach up the tree and grab the wrong NgControl
    // TODO open feature request with angular to expose injector.get with InjectFlags
    this._errorStateMatcher = new CmErrorStateMatcher(this._injector.get(NgControl));
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
