import { Component, OnInit } from '@angular/core';
import {CarModel} from "../models/car.model";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['brand', 'model', 'color', 'buildDate'];
  cars: CarModel[];

  constructor() { }

  ngOnInit() {
  }

}
