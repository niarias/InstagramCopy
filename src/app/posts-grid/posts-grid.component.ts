import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/data/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrls: ['./posts-grid.component.scss']
})
export class PostsGridComponent implements OnInit {
  @Input() posts: Post[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPost(post: Post) {
    this.router.navigate(['/post-container', post.id]);
  }
}
