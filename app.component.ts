import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './features/home/home.component';
import { SermonEditorComponent } from './features/sermon/editor/sermon-editor.component';
import { CommunityFeedComponent } from './features/community/community-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, HomeComponent, SermonEditorComponent, CommunityFeedComponent],
  template: `
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Sermon Companion</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <app-home *ngIf="view === 'home'" (generated)="loadEditor($event)" (openCommunity)="loadCommunity()"></app-home>
        <app-sermon-editor *ngIf="view === 'editor'" [content]="editorContent" (save)="saveSermon($event)" (back)="loadHome()"></app-sermon-editor>
        <app-community-feed *ngIf="view === 'community'" (back)="loadHome()"></app-community-feed>
      </ion-content>
    </ion-app>
  `
})
export class AppComponent {
  view: 'home' | 'editor' | 'community' = 'home';
  editorContent = '';

  loadHome() {
    this.view = 'home';
  }

  loadCommunity() {
    this.view = 'community';
  }

  loadEditor(content: string) {
    this.editorContent = content;
    this.view = 'editor';
  }

  saveSermon(text: string) {
    try {
      localStorage.setItem('sermon', text);
    } catch {}
    alert('Sermon saved');
    this.loadHome();
  }
}
