import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }

  async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }

  async getPost(id: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return await response.json();
  }
}
