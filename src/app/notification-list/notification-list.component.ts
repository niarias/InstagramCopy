import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Notification } from 'src/data/Notification';
import { Post } from 'src/data/Post';
import { User } from 'src/data/User';

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  @Input() title: string;
  @Input() notifications: Notification[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToProfile(user: User) {
    this.router.navigate(['/profile', user.id]);
  }

  goToPost(post: Post) {
    this.router.navigate(['/post-container', post.id]);
  }

  goToLikes(notification: Notification) {
    this.router.navigate(['/likes', notification.id]);
  }
}
