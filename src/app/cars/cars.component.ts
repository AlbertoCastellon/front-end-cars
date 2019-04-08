import { Component, OnInit, PipeTransform } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})


export class CarsComponent implements OnInit {

  cars: Car[];
  cars$: Observable<Car[]>;

  constructor(private carService: CarService) {
  }
  
  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }


}

