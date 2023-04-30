/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CarListComponent } from './car-list.component';
import { HttpClientModule } from '@angular/common/http';

import { Car } from 'src/app/models/car-models/car';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 4; i++) {

      component.cars.push(
        new Car(
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.string(),
          faker.datatype.string(),
          faker.datatype.number(),
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.string()
        )
      );

    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('table should have 4 columns', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(4)
  });

  it('table should have 3 rows', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(3)
  });
});
