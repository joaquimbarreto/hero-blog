import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts: Post[] = [];
  users: User[] = [];
  isLoading: boolean = true;

  ngOnInit() {
    this.postsService.getPosts().then((data) => (this.posts = data));
    this.postsService.getUsers().then((data) => {
      this.users = data;
      this.isLoading = false;
    });
  }
}
