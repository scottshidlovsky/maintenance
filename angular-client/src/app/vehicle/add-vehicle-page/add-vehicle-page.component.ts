import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'cm-add-vehicle-page',
  templateUrl: './add-vehicle-page.component.html',
  styleUrls: ['./add-vehicle-page.component.scss']
})
export class AddVehiclePageComponent {
  makeOptions: Observable<string[]>;

  makeChange: Subject<string> = new Subject();

  modelOptions: Observable<string[]>;

  modelChange: Subject<string> = new Subject();

  yearOptions: Observable<number[]>;

  constructor(private vehicleService: VehicleService) {
    this.makeOptions = this.vehicleService.retrieveVehicleMakes();
    this.modelOptions = this.makeChange
      .asObservable()
      .pipe(switchMap(make => this.vehicleService.retrieveVehicleModels(make)));
    this.yearOptions = this.modelChange.asObservable().pipe(
      withLatestFrom(this.makeChange),
      switchMap(([model, make]) => {
        return this.vehicleService.retrieveVehicleYearsByMakeAndModel(make, model);
      })
    );
  }
}
