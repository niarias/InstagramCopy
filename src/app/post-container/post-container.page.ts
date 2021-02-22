import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/services/PostsService/posts.service';

import { Post } from 'src/data/Post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.page.html',
  styleUrls: ['./post-container.page.scss']
})
export class PostContainerPage implements OnInit, OnDestroy {
  subscription: any;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.post = this.postsService.getPost(params['id']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
