import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.carForm = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null),
      'color': new FormControl(null),
      'buildDate': new FormControl(null)
    })
  }

  onSubmit() {
  }

}
