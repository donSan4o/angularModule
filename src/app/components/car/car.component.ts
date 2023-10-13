import { Component, Input } from '@angular/core';
import { ICar } from 'src/app/interfaces';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent {
  @Input()
  car: ICar
  
  constructor(private carService: CarService){}

  update(): void {
    this.carService.setCarForUpdate(this.car)
  }

  deleteCar(): void {
    this.carService.deleteById(this.car.id).subscribe()
  }
}
