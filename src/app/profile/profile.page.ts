import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/services/PostsService/posts.service';

import { Post } from 'src/data/Post';
import { User } from 'src/data/User';

import { Randomizer } from 'src/data/Helpers/Randomizer';
import { UserService } from 'src/services/UserService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {
  orderedPosts: Post[] = [];
  randomPosts: Post[] = [];
  user: User;
  subscription: any;

  isCurrentUser = false;
  showGridPosts = false;
  showScrollPosts = false;
  showTagPosts = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const userId = params['id'];

      if (userId) {
        this.isCurrentUser = false;
        this.user = this.userService.getUser(userId);
      } else {
        this.isCurrentUser = true;
        this.user = this.userService.mainUser;
      }

      this.initialisePosts();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initialisePosts() {
    this.orderedPosts = this.getRandomPosts();
    this.randomPosts = this.getRandomPosts();
  }

  getRandomPosts(): Post[] {
    const randomPostsCount = Randomizer.randomIntFromInterval(6, 20);
    const posts = this.postsService.getRandomPosts(randomPostsCount);

    // posts.forEach(post => {
    //   post.author = this.user;
    // });

    return posts;
  }

  segmentChanged(event: any) {
    this.hideAllSections();

    const sValue = <string>event.detail.value;
    const value = Number(sValue[sValue.length - 1]) % 3;

    console.log(value);

    switch (value) {
      case 0:
        this.showGridPosts = true;
        break;

      case 1:
        this.showScrollPosts = true;
        break;

      case 2:
        this.showTagPosts = true;
        break;
    }
  }

  hideAllSections() {
    this.showGridPosts = false;
    this.showScrollPosts = false;
    this.showTagPosts = false;
  }

  toggleFollow() {
    this.user.isFollowing = !this.user.isFollowing;
  }
}
