import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent }      from './cars/cars.component';
import { CarDetailComponent }  from './car-detail/car-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'new-car', component: CarDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})

export class AppRoutingModule {}