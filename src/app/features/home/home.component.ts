import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SermonAIService } from '../../core/services/sermon-ai.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, FormsModule],
  template: `
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Generate Sermon Outline</h2>
      <form (ngSubmit)="onSubmit()" #form="ngForm">
        <ion-item>
          <ion-label position="stacked">Theme or Scripture</ion-label>
          <ion-input required name="theme" [(ngModel)]="theme" placeholder="Faith, John 3:16"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Length (minutes)</ion-label>
          <ion-input required type="number" name="length" [(ngModel)]="length" min="1"></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit" [disabled]="form.invalid">Generate</ion-button>
      </form>
      <div>{{ result }}</div>
      <ion-button expand="full" (click)="openCommunity.emit()">Community</ion-button>
    </ion-content>
  `
})
export class HomeComponent {
  @Output() generated = new EventEmitter<string>();
  @Output() openCommunity = new EventEmitter<void>();

  theme = '';
  length = 1;
  result = '';

  constructor(private ai: SermonAIService) {}

  async onSubmit() {
    try {
      const outline = await this.ai.generateOutline({ theme: this.theme, length: this.length });
      this.result = outline;
      this.generated.emit(outline);
    } catch {
      this.result = 'Error generating outline';
    }
  }
}
