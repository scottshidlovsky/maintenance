import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validator,
  NG_VALIDATORS
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'cm-field-input',
  templateUrl: './cm-field-input.component.html',
  styleUrls: ['./cm-field-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmFieldInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CmFieldInputComponent),
      multi: true
    }
  ]
})
export class CmFieldInputComponent implements ControlValueAccessor, Validator, OnDestroy {
  internalControl = new FormControl();
  destroyed$ = new ReplaySubject<boolean>(1);

  constructor() {
    this.internalControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => this.onChange(value));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  writeValue(value: any): void {
    this.internalControl.setValue(value);
  }

  onChange = value => {};
  onTouched = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    console.log('running validation');
    return this.internalControl.errors;
  }
}
