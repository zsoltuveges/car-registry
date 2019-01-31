import {Component, OnInit} from '@angular/core';
import {CarModel} from '../models/car.model';
import {CarFormService} from '../services/carForm.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['brand', 'model', 'color', 'buildDate'];
  cars: CarModel[];
  isLoading = true;

  constructor(private carFormService: CarFormService,
              private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    // This is for in-memory storing
    // this.cars = this.carFormService.getCars();
    // this.carFormService.carsChanged.subscribe(
    //   (cars: CarModel[]) => {
    //     this.cars = cars;
    //   }
    // );
    this.firebaseService.getCars().subscribe(
      (response: CarModel[]) => {
        this.cars = response;
        this.isLoading = false;
      }
    );
  }
}
