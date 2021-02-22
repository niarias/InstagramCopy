import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IonCard, ActionSheetController, IonSlides } from '@ionic/angular';

import { ModalService } from 'src/services/ModalService/modal.service';

import { SharePage } from '../share/share.page';

import { Post } from 'src/data/Post';
import { Comment } from 'src/data/Comment';
import { User } from 'src/data/User';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @ViewChild('card') card: IonCard;
  @ViewChild('slides') slides: IonSlides;

  @Input() post: Post;

  slideOpts = {
    zoom: false
  };

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  postHeartClick() {
    this.post.isLiked = !this.post.isLiked;

    if (this.post.isLiked) {
      this.animateHeart();
    }
  }

  commentHeartClick(comment: Comment) {
    comment.isLiked = !comment.isLiked;
  }

  postDoubleClick() {
    this.post.isLiked = true;
    this.animateHeart();
  }

  animateHeart() {
    const heartButtons = this.card.el.getElementsByClassName('heart-button');
    console.log(heartButtons);

    if (heartButtons.length > 0) {
      const heartButton = heartButtons[0] as HTMLElement;
      console.log(heartButton);

      if (heartButton) {
        heartButton.style.display = 'block';
        heartButton.classList.add('animated');
        heartButton.classList.add('heartBeat');

        setTimeout(() => {
          heartButton.classList.remove('heartBeat');
          heartButton.classList.add('zoomOut');

          setTimeout(() => {
            heartButton.style.display = 'none';
            heartButton.classList.remove('zoomOut');
            heartButton.classList.remove('animated');
          }, 1000);
        }, 1000);
      }
    }
  }

  showCommments() {
    this.router.navigate(['/comments', this.post.id]);
  }

  goToProfile(author: User) {
    this.router.navigate(['/profile', author.id]);
  }

  async openPostActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Share to Facebook',
          handler: () => {}
        },
        {
          text: 'Share to Messenger',
          handler: () => {}
        },
        {
          text: 'Share to...',
          handler: () => {}
        },
        {
          text: 'Copy Link',
          handler: () => {}
        },
        {
          text: 'Turn On Post Notifications',
          handler: () => {}
        },
        {
          text: 'Report',
          cssClass: 'redText',
          handler: () => {}
        },
        {
          text: 'Mute',
          cssClass: 'redText',
          handler: () => {}
        },
        {
          text: 'Unfollow',
          cssClass: 'redText',
          handler: () => {}
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    await actionSheet.present();
  }

  share() {
    this.modalService.presentModal(SharePage, {}, null, 'shareModal');
  }

  onSlideChange(post: Post) {
    this.slides.getActiveIndex().then(x => {
      post.pictureIndex = x + 1;
    });
  }
}
