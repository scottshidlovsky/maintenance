import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vehicle', loadChildren: './vehicle/vehicle.module#VehicleModule' }
];
