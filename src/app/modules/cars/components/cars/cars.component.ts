import { Component, Input } from '@angular/core';
import { CarService } from '../../../../services/car.service';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent {
  @Input()
  cars: ICar[]
  panelOpenState: boolean

  constructor(private carService: CarService){

  }
}
