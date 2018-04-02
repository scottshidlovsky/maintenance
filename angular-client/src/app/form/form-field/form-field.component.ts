import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, ViewChild } from '@angular/core';
import { FormFieldControlDirective } from './form-field-control.directive';

@Component({
  selector: 'cm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit, AfterContentInit {

  @Input()
  required: boolean;

  @Input()
  label: string;


  @ContentChild(FormFieldControlDirective) control: FormFieldControlDirective;

  errorMessages = [
    {key: 'required', message: 'this is required'},
    {key: 'minLength', message: 'this isn\'t long enough'}
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('control', this.control)
  }

}
