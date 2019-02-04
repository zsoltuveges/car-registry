import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarFormService} from '../services/carForm.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;
  colors: string[];


  constructor(private carFormService: CarFormService,
              private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.carForm = new FormGroup({
      'brand': new FormControl(null, [Validators.required]),
      'model': new FormControl(null, [Validators.required]),
      'color': new FormControl(null),
      'buildDate': new FormControl(null)
    });
    this.carFormService.getColorList().subscribe(
      (response: any) => {
        this.colors = response['colors'];
      }
  );
  }

  onSubmitToMemory() {
    this.carFormService.addCar(this.carForm['value']);
    this.carForm.reset();
  }

  onSubmitToFirebase() {
    this.carForm['value'].buildDate = new Date(this.carForm['value'].buildDate.toDateString()).toDateString();
    this.firebaseService.addCar(this.carForm['value']);
    this.carForm.reset();
  }

}
