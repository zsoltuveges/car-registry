import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CarModel} from '../models/car.model';
import {CarFormService} from '../services/carForm.service';
import {FirebaseService} from '../services/firebase.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['brand', 'model', 'color', 'buildDate'];
  dataSource = new MatTableDataSource<CarModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  paginatorOptions = {
    pageSize: 10,
    pageSizeOptions: [5, 10, 20]
  };

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
        this.dataSource.data = response.reverse();
        this.isLoading = false;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
