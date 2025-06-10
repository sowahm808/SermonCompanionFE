import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-community-feed',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="back.emit()">Back</ion-button>
        </ion-buttons>
        <ion-title>Community</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Shared sermons will appear here.</p>
    </ion-content>
  `
})
export class CommunityFeedComponent {
  @Output() back = new EventEmitter<void>();
}
