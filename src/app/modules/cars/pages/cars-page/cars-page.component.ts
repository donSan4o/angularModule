import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.less']
})
export class CarsPageComponent implements OnInit {
  cars: ICar[]
  length: number
  pageIndex: number
  pageSize: number = 10

  constructor(private carService: CarService){}

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      this.length = value.total_items
      this.cars = value.items
    })
  }
  handlePageEvent(e: PageEvent) {
    console.log('e:', e)
  }
}
