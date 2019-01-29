import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarFormComponent } from './car-form/car-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import {MatGridListModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
