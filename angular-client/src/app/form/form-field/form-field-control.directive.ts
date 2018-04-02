import { Directive, Host, Optional, Self } from '@angular/core';
import { FormControl, FormGroupDirective, NgControl, NgForm } from '@angular/forms';

@Directive({
  selector: '[cmFormFieldControl]'
})
export class FormFieldControlDirective {
  constructor(
    @Optional()
    @Self()
    public ngControl: NgControl,
    @Optional() private _parentForm: NgForm,
    @Optional() private _parentFormGroup: FormGroupDirective
  ) {}

  get errorState() {
    console.log('calling error state');
    const parent = this._parentFormGroup || this._parentForm;
    const control = this.ngControl ? (this.ngControl.control as FormControl) : null;
    console.log(!!(control && control.invalid && (control.touched || (parent && parent.submitted))));
    return !!(control && control.invalid && (control.touched || (parent && parent.submitted)));
  }
}
