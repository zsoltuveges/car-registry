import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarFormService {
  carsChanged = new Subject<CarModel[]>();
  private cars: CarModel[] = [];


  constructor(private http: HttpClient) {
  }

  addCar(car: CarModel) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }

  getCars() {
    return this.cars.slice();
  }

  getColorList() {
    return this.http.get('./assets/colors.json');
  }
}
