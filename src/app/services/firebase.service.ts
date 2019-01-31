import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class FirebaseService {

  constructor(private firebaseDb: AngularFireDatabase) {
  }

  addCar(car: CarModel) {
    this.firebaseDb.list('car-registry').push(car);
  }

  getCars() {
    return this.firebaseDb.list<CarModel>('car-registry').valueChanges();
  }
}
