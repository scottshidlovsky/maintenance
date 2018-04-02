import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) {}

  retrieveVehicleMakes(): Observable<string[]> {
    return this.http.get<string[]>('/api/vehicle', {
      withCredentials: true
    });
  }

  retrieveVehicleModels(make: string): Observable<string[]> {
    return this.http.get<string[]>(`/api/vehicle/make/${make}`, {
      withCredentials: true
    });
  }

  retrieveVehicleYearsByMakeAndModel(make: string, model: string): Observable<number[]> {
    return this.http.get<number[]>(`/api/vehicle/make/${make}/model/${model}`, {
      withCredentials: true
    });
  }
}
