import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/data/Post';

@Component({
  selector: 'posts-slider',
  templateUrl: './posts-slider.component.html',
  styleUrls: ['./posts-slider.component.scss']
})
export class PostsSliderComponent implements OnInit {
  @Input() posts: Post[] = [];

  constructor() {}

  ngOnInit() {}
}
