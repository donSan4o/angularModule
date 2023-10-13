import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent implements OnInit {
  cars: ICar[]
  car: ICar

  constructor(private carService: CarService){}

  ngOnInit(): void {
    this.carService.getTriggerStatus().subscribe(() => {
      this.carService.getAll().subscribe(value => this.cars = value)  
    })
  }
}
