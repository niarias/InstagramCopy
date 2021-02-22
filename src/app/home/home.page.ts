import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/services/PostsService/posts.service';

import { Post } from 'src/data/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.initialisePosts();
  }

  initialisePosts() {
    this.postsService.initialiseHomePosts();
  }
}
