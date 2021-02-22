import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/services/NotificationService/notification.service';

@Component({
  selector: 'user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss']
})
export class UserNotificationsComponent implements OnInit {
  constructor(public notificationService: NotificationService) {}

  ngOnInit() {}
}
