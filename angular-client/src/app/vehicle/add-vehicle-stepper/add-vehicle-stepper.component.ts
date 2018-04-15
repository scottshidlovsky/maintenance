import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { MatHorizontalStepper } from '@angular/material';

export interface UserVehicle {
  make: string;
  model: string;
  year: number;
  displayName: string;
  currentMileage: number;
  weeklyMileage: number;
}

@Component({
  selector: 'cm-add-vehicle-stepper',
  templateUrl: './add-vehicle-stepper.component.html',
  styleUrls: ['./add-vehicle-stepper.component.scss']
})
export class AddVehicleStepperComponent implements OnDestroy {
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
      make: [],
      model: [],
      year: [],
      displayName: [],
      currentMileage: [],
      weeklyMileage: []
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
