import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICar } from 'src/app/interfaces';
import { CarService } from 'src/app/services';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.less']
})
export class CarFormComponent implements OnInit {
  form: FormGroup
  carForUpdate: ICar

  constructor(private carService: CarService){}

  ngOnInit(): void {
    this._initForm()

    this.carService.getCarForUpdate().subscribe(value => {
      this.carForUpdate = value

      if(value) {
        const carForUpdateValue = {...value}
        delete carForUpdateValue.id
        this.form.setValue(carForUpdateValue)
      }
    })
  }


  _initForm(): void {
    this.form = new FormGroup({
      brand: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
      ]),
      price: new FormControl(0, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.min(0),
        Validators.max(1000000)
      ]),
      year: new FormControl(1990,[
        Validators.required,
        Validators.pattern(/^[0-9]{4}$/),
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ])
    })
  }

  save(): void {
    this.carService.create(this.form.value).subscribe(() => {
      this.form.reset()
    })
  }

  update():void {
    this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(() => {
      this.carService.setCarForUpdate(null)
      this.form.reset()
    })
  }
}
