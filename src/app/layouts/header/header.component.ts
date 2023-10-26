import {Component, OnInit} from '@angular/core';
import { IAuth } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
  user:IAuth
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const accessToken = this.authService.getAccessToken();
    if (accessToken &&!this.user){
      this.authService.me().subscribe()
    }
    this.authService.getAuthUser().subscribe(value => {
      this.user = value
    })
  }
}