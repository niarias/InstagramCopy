import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  {
    path: 'post-editor',
    loadChildren: './post-editor/post-editor.module#PostEditorPageModule'
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsPageModule'
  },
  {
    path: 'profile/:id',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'post-container/:id',
    loadChildren:
      './post-container/post-container.module#PostContainerPageModule'
  },
  {
    path: 'comments/:id',
    loadChildren: './comments/comments.module#CommentsPageModule'
  },
  { path: 'share', loadChildren: './share/share.module#SharePageModule' },
  { path: 'likes/:id', loadChildren: './likes/likes.module#LikesPageModule' },
  {
    path: 'post-filters/:id',
    loadChildren: './post-filters/post-filters.module#PostFiltersPageModule'
  },
  { path: 'post-share', loadChildren: './post-share/post-share.module#PostSharePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
