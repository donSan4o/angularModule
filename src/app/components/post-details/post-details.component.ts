import { Component } from '@angular/core';
import { IPost } from 'src/app/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.less']
})
export class PostDetailsComponent {
  post: IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService){
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IPost;
      if(state) {
        this.post = state
      } else {
        this.postService.getById(id).subscribe(value => this.post = value)
      }
    })
  }
}
