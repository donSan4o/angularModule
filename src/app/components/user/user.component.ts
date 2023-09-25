import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent {

  @Input()
  user: IUser

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  getDetails():void {
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user
    })
  }
}
