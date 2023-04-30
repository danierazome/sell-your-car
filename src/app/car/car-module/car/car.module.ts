import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarListComponent } from '../../car-list/car-list/car-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CarComponent, CarListComponent],
  declarations: [CarComponent, CarListComponent]
})
export class CarModule { }
