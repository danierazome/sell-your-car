import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Car } from 'src/app/models/car-models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl: string = environment.UsedCarsBaseUrl;

  constructor(private http: HttpClient) { }

  getAllUsedCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

}
