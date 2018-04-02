import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridModule } from '../shared/grid/grid.module';
import {
  UserVehicleCardComponent,
} from './user-vehicle-card/user-vehicle-card.component';
import { NewUserVehicleCardComponent } from './new-user-vehicle-card/new-user-vehicle-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
    GridModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    UserVehicleCardComponent,
    NewUserVehicleCardComponent
  ]
})
export class DashboardModule {}
