import { Component, OnInit} from '@angular/core';
import { Car } from '../car';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarService }  from '../car.service';
import { Brand } from '../brand';
import { Country } from '../country';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

  car: Car = new Car();

  id : string;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCar();
  }

  getCar(): void {
    this.id  = this.route.snapshot.paramMap.get('id');
    if(this.id!=null)
      this.carService.getCar(this.id)
        .subscribe(car => this.car = car);
    else{
      this.car.registration = new Date();
      this.car.brand = new Brand();
      this.car.country = new Country();
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    if(this.id!=null)
      this.carService.updateCar(this.car)
        .subscribe(() => this.goBack());
    else
      this.add();
      
  }

  add(): void {

    //if (!this.car) { return; }
      this.carService.addCar(this.car)
        .subscribe(() => this.goBack());
  }

}
