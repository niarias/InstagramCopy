import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostsService } from 'src/services/PostsService/posts.service';
import { UserService } from 'src/services/UserService/user.service';
import { NotificationService } from 'src/services/NotificationService/notification.service';
import { ModalService } from 'src/services/ModalService/modal.service';

import { SharePage } from './share/share.page';

@NgModule({
  declarations: [AppComponent, SharePage],
  entryComponents: [SharePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    PostsService,
    UserService,
    ModalService,
    NotificationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
