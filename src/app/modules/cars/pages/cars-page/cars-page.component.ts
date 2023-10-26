import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from '../../../../services/car.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.carService.getAll(page).subscribe(value => {
        this.length = value.total_items
        this.cars = value.items
      })
    })
  }

  handlePageEvent(e: PageEvent) {
    this.router.navigate([], {queryParams: {page:e.pageIndex+1}})
  }
}
