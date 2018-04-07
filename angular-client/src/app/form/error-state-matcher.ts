import { AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/**
 * Material will pass us the form control on the component that error state matcher is on.
 * Since we are wrapping material with our own custom components, we use an internal control.
 * We want to use the form control on our wrapper component so that the error state takes into
 * account any validators on it.
 *
 * Example:
 *  <form [formGroup]='formGroup'>
 *    <cm-input formControlName='input' [minLength]='10'></cm-input>
 *  </form>
 *
 *  cm-input _internalControl has no knowledge of the min length validator
 *  Use this class to pass the control that gets added from the form control name directive into the error state matcher
 *
 *  @internal to form module
 */
export class CmErrorStateMatcher implements ErrorStateMatcher {
  constructor(private internalControl: AbstractControl) {}

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(
      this.internalControl &&
      this.internalControl.invalid &&
      (this.internalControl.touched || (form && form.submitted))
    );
  }
}
