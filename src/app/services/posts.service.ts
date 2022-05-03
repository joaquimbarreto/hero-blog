import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }

  async getAuthors() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    return await response.json();
  }


}
