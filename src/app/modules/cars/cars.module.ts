import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    CarsPageComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatPaginatorModule
  ]
})
export class CarsModule { }
