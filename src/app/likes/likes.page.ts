import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from 'src/services/NotificationService/notification.service';

import { Notification } from 'src/data/Notification';
import { User } from 'src/data/User';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss']
})
export class LikesPage implements OnInit, OnDestroy {
  subscription: any;
  notification: Notification;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.notification = this.notificationService.getNotification(
        params['id']
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToProfile(user: User) {
    this.router.navigate(['/profile', user.id]);
  }
}
