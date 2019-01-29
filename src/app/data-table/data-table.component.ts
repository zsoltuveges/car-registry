import { Component, OnInit } from '@angular/core';
import {CarModel} from "../models/car.model";
import {CarFormService} from "../services/carForm.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['brand', 'model', 'color', 'buildDate'];
  cars: CarModel[];

  constructor(private carFormService: CarFormService) { }

  ngOnInit() {
    this.cars = this.carFormService.getCars();
    this.carFormService.carsChanged.subscribe(
      (cars: CarModel[]) => {
        this.cars = cars;
      }
    );
  }

}
