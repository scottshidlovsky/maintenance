import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { MatHorizontalStepper } from '@angular/material';

export interface UserVehicle {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'cm-add-vehicle-stepper',
  templateUrl: './add-vehicle-stepper.component.html',
  styleUrls: ['./add-vehicle-stepper.component.scss']
})
export class AddVehicleStepperComponent implements OnDestroy {
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  form: FormGroup;

  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  @Output() make: EventEmitter<string> = new EventEmitter();

  @Output() model: EventEmitter<string> = new EventEmitter();

  @Input() makeOptions: string[] = [];

  @Input() modelOptions: string[] = [];

  @Input() yearOptions: number[] = [];

  @Output() submit: EventEmitter<UserVehicle> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      make: [null],
      model: [null],
      year: [null],
      displayName: [null]
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
