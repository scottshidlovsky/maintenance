import { Component } from '@angular/core';

@Component({
  selector: 'cm-user-vehicle-card',
  templateUrl: './user-vehicle-card.component.html',
  styleUrls: ['./user-vehicle-card.component.scss']
})
export class UserVehicleCardComponent {}

@Component({
  selector: 'cm-user-vehicle-card-name',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./user-vehicle-card-name.component.scss']
})
export class UserVehicleCardNameComponent {}

@Component({
  selector: 'cm-user-vehicle-card-details',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./user-vehicle-card-details.component.scss']
})
export class UserVehicleCardDetailsComponent {}

@Component({
  selector: 'cm-user-vehicle-card-mileage',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./user-vehicle-card-mileage.component.scss']
})
export class UserVehicleCardMileageComponent {}
