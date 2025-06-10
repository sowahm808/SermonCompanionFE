import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sermon-editor',
  standalone: true,
  imports: [IonicModule, FormsModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="back.emit()">Back</ion-button>
        </ion-buttons>
        <ion-title>Edit Sermon</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-textarea [(ngModel)]="content" style="height: 60vh"></ion-textarea>
      <ion-button expand="full" (click)="save.emit(content)">Save</ion-button>
    </ion-content>
  `
})
export class SermonEditorComponent {
  @Input() content = '';
  @Output() save = new EventEmitter<string>();
  @Output() back = new EventEmitter<void>();
}
