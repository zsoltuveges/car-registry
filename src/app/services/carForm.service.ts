import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';
import {Subject} from 'rxjs';

@Injectable()
export class CarFormService {
  carsChanged = new Subject<CarModel[]>();
  private cars: CarModel[] = [];


  constructor() {
  }

  addCar(car: CarModel) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }

  getCars() {
    return this.cars.slice();
  }
}
