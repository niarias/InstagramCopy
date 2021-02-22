import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserNotificationsComponent } from './user-notifications.component';
import { NotificationListModule } from '../notification-list/notification-list.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NotificationListModule],
  exports: [UserNotificationsComponent],
  declarations: [UserNotificationsComponent]
})
export class UserNotificationsComponentModule {}
