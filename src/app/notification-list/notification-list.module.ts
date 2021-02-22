import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { NotificationListComponent } from './notification-list.component';
import { PostComponentModule } from '../post/post.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PostComponentModule
  ],
  exports: [NotificationListComponent],
  declarations: [NotificationListComponent]
})
export class NotificationListModule {}
