import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  addUserVehicle() {
    this.router.navigate(['vehicle', 'add']);
  }
}
