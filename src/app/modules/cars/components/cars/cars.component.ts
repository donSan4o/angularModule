import { Component } from '@angular/core';
import { CarService } from '../../../../services/car.service';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent {
  cars: ICar
  
  constructor(private carService: CarService){

  }
}
