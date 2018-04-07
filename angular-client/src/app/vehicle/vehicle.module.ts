import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddVehiclePageComponent } from './add-vehicle-page/add-vehicle-page.component';
import { CarMakePickerComponent } from './car-make-picker/car-make-picker.component';
import { GridModule } from '../shared/grid/grid.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './+state/vehicle.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AddVehicleStepperComponent } from './add-vehicle-stepper/add-vehicle-stepper.component';
import { VehicleService } from './vehicle.service';
import { FormModule } from '../form/form.module';

@NgModule({
  imports: [
    GridModule,
    MatStepperModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormModule,
    EffectsModule.forFeature([]),
    RouterModule.forChild([{ path: 'add', component: AddVehiclePageComponent }])
  ],
  exports: [],
  declarations: [AddVehiclePageComponent, CarMakePickerComponent, AddVehicleStepperComponent],
  providers: [VehicleService]
})
export class VehicleModule {}
