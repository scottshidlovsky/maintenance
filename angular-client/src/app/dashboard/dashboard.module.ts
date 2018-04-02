import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridModule } from '../shared/grid/grid.module';
import {
  UserVehicleCardComponent,
  UserVehicleCardNameComponent,
  UserVehicleCardDetailsComponent,
  UserVehicleCardMileageComponent
} from './user-vehicle-card/user-vehicle-card.component';
import { NewUserVehicleCardComponent } from './new-user-vehicle-card/new-user-vehicle-card.component';

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
    GridModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    UserVehicleCardComponent,
    UserVehicleCardNameComponent,
    UserVehicleCardDetailsComponent,
    UserVehicleCardMileageComponent,
    NewUserVehicleCardComponent
  ]
})
export class DashboardModule {}
