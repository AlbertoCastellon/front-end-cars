import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent }      from './cars/cars.component';
import { CarDetailComponent }  from './car-detail/car-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'detail/:id', component: CarDetailComponent },
  { path: 'cars', component: CarsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})

export class AppRoutingModule {}