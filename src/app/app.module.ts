import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarFormComponent} from './car-form/car-form.component';
import {DataTableComponent} from './data-table/data-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarFormService} from "./services/carForm.service";

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [CarFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
