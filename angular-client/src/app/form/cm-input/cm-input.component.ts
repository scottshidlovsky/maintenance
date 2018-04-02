import { Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import {
  AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR,
  Validator
} from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from "rxjs/operators";



@Component({
  selector: 'cm-input',
  templateUrl: './cm-input.component.html',
  styleUrls: ['./cm-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CmInputComponent),
      multi: true,
    }
  ]
})
export class CmInputComponent implements ControlValueAccessor, OnDestroy, Validator {

  _minLength: number = 5;
  @Input()
  set cmMinLength(min) {
    this._minLength = min;
    this.validatorChanged();
  }
  get cmMinLength() {
    return this._minLength;
  }

  internalControl = new FormControl();

  destroyed$ = new ReplaySubject<boolean>(1);

  constructor() {
    this.internalControl.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((value) => {
      this.onChange(value);
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  writeValue(value: any): void {
    this.internalControl.setValue(value);
  }

  onChange = (val) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validatorChanged = () => {};
  validate(c: AbstractControl): { [key: string]: any; } {
    console.log('running internal validation');
    if (!c.value) {
      return { minLength: true };
    } else if (c.value.length < this.cmMinLength) {
      return { minLength: true };
    } else {
      return {};
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    this.validatorChanged = fn;
  }
}
