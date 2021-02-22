import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import { UserNotificationsComponentModule } from '../user-notifications/user-notifications.module';
import { FollowingNotificationsComponentModule } from '../following-notifications/following-notifications.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UserNotificationsComponentModule,
    FollowingNotificationsComponentModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
