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
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarFormService} from './services/carForm.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

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
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase, 'car-registry'),
    AngularFireDatabaseModule
  ],
  providers: [CarFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
