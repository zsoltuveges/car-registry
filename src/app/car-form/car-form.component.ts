import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarFormService} from "../services/carForm.service";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(private carFormService: CarFormService) {
  }

  ngOnInit() {
    this.carForm = new FormGroup({
      'brand': new FormControl(null, [Validators.required]),
      'model': new FormControl(null, [Validators.required]),
      'color': new FormControl(null),
      'buildDate': new FormControl(null)
    })
  }

  onSubmit() {
    this.carFormService.addCar(this.carForm['value']);
  }

}
