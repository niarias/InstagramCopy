import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostEditorPage } from '../post-editor/post-editor.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private modalCtrl: ModalController) {}

  openPostEditor() {
    this.openPostEditorModal();
  }

  async openPostEditorModal() {
    const modal = await this.modalCtrl.create({
      component: PostEditorPage,
      componentProps: {}
    });

    return await modal.present();
  }
}
