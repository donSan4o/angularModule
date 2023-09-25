import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.inteface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: IPost[]
  post: IPost;

  constructor(private postService: PostService ){} 

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts = value)  
  }

  getPost(post: IPost){
    this.post = post;
  }
}
