import { Component, Input } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent {
  @Input()
  car: ICar
}
