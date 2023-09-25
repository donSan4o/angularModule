import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})

export class UsersComponent implements OnInit {
  users: IUser[];
  user: IUser;

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }

  getUser(user: IUser) {
    this.user = user
  }
}
