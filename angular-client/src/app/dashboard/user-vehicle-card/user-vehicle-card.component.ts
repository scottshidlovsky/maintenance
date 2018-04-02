import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-user-vehicle-card',
  templateUrl: './user-vehicle-card.component.html',
  styleUrls: ['./user-vehicle-card.component.scss']
})
export class UserVehicleCardComponent {
  @Input() name: string;
  @Input() details: string;
  @Input() mileage: number;
}
