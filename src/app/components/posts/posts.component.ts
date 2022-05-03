import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: Post[] = []
  authors: Author[] = []
  isLoading: boolean = true

  ngOnInit() {
    this.postsService.getPosts().then(data => this.posts = data)
    this.postsService.getAuthors().then(data => {
      this.authors = data.results
      this, this.isLoading = false
    })
  }

}
