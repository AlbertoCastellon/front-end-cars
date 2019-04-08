import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CarsComponent} from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    TableFilteringComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) 
  ],
  exports: [CarsComponent, TableFilteringComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }