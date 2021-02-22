import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { Shuffler } from 'src/data/Helpers/Shuffler';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.page.html',
  styleUrls: ['./post-editor.page.scss']
})
export class PostEditorPage implements OnInit {
  selectedPicture: string;
  pictures: string[] = [];

  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    this.initialisePictures();
  }

  initialisePictures() {
    const tempPictures = [];

    for (let i = 1; i <= 40; i++) {
      tempPictures.push('assets/images/posts/image ' + i + '.jpeg');
    }

    this.pictures = Shuffler.shuffle(tempPictures.slice());
    this.selectedPicture = this.pictures[0];
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  selectPicture(picture: string) {
    this.selectedPicture = picture;
  }

  next() {
    this.modalCtrl.dismiss().then(() => {
      this.router.navigate(['/post-filters', this.selectedPicture]);
    });
  }
}
