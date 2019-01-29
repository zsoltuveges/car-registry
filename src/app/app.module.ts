import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarFormComponent } from './car-form/car-form.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
