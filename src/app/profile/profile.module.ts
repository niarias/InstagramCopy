import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PostsSliderComponentModule } from '../posts-slider/posts-slider.module';
import { PostsGridComponentModule } from '../posts-grid/posts-grid.module';
import { SharedModule } from '../shared/shared.module';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PostsSliderComponentModule,
    PostsGridComponentModule,
    SharedModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
