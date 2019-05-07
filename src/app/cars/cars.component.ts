import { Component, PipeTransform, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Car } from '../car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [DatePipe]
})


export class CarsComponent implements OnInit {

  cars: Car[];
  cars$: Observable<Car[]>;
  filter = new FormControl('');

  constructor(private pipe: DatePipe, private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  private getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.createObservable();
    });
  }

  delete(car: Car): void {
    this.carService.deleteCar(car).subscribe( () => {
      this.getCars();
    });
  }
  
  private createObservable() {
    this.cars$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, this.pipe))
    );
  }

  private search(text: string, pipe: PipeTransform): Car[] {
    
    return this.cars.filter(car => {
      const term = text.toLowerCase();
      return car.brand.name.toLowerCase().includes(term)
      || car.country.name.toLowerCase().includes(term) 
      || pipe.transform(car.registration, 'medium').toLowerCase().includes(term);
    });
  }

}
