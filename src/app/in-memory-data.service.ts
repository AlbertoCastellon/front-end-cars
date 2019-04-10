import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars: Car[] = [
      {id: '1', brand: 'BMW', registration: new Date(),country: 'Germany'},
      {id: '2', brand: 'Seat', registration: new Date(),country: 'Spain'},
      {id: '3', brand: 'Audi', registration: new Date(),country: 'Germany'},
      {id: '4', brand: 'Toyota', registration: new Date(),country: 'Japan'},
      {id: '5', brand: 'BMW', registration: new Date(),country: 'Germany'},
      {id: '6', brand: 'Seat', registration: new Date(),country: 'Spain'},
      {id: '7', brand: 'Audi', registration: new Date(),country: 'Germany'},
      {id: '8', brand: 'Toyota', registration: new Date(),country: 'Japan'}
  ];
    return {cars};
  }

  // Overrides the genId method to ensure that a car always has an id.
  // If the cars array is empty,
  // the method below returns the initial number (11).
  // if the cars array is not empty, the method below returns the highest
  // car id + 1.
  genId(cars: Car[]): number {

    return cars.length > 0 ? Math.max(...cars.map(car => parseInt(car.id))) + 1 : 11;
  }
}