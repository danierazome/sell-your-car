import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-models/car';
import { CarService } from 'src/app/services/car-services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  getAllUsedCars(): void {
    this.carService.getAllUsedCars().subscribe((cars) => {
      this.cars = cars;

    });

  }

  ngOnInit() {
    this.getAllUsedCars();
  }

  getAmountOfCarsPerBrand(): string[]{

    let brands = new Map();
    let amountPerBrand: string[] = [];

    this.cars.forEach(car => {
      if (brands.has(car.marca)) {
        brands.set(car.marca, 1 + brands.get(car.marca));
      } else {
        brands.set(car.marca, 1);
      }
    });

    brands.forEach((amountOfCars,brand) => {
      amountPerBrand.push(`Total ${brand}: ${amountOfCars}`)
    })

    return amountPerBrand;
  }

}
