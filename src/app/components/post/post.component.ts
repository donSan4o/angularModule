import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent {
  @Input()
  post: IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  getDetails(): void {
    this.router.navigate([this.post.id], {
      relativeTo: this.activatedRoute,
      state: this.post
    })
  }
}
