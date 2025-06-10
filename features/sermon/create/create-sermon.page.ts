import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SermonAIService } from '../../../core/services/sermon-ai.service';
import { StorageService } from '../../../core/services/storage.service';
import { SermonEditorComponent } from '../editor/sermon-editor.component';

export interface Sermon {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-create-sermon',
  standalone: true,
  imports: [IonicModule, FormsModule, SermonEditorComponent],
  templateUrl: './create-sermon.page.html',
  styleUrls: ['./create-sermon.page.css']
})
export class CreateSermonPage {
  theme = '';
  length = 5;
  generated = '';

  constructor(private ai: SermonAIService, private storage: StorageService) {}

  async generate() {
    this.generated = await this.ai.generateOutline({ theme: this.theme, length: this.length });
  }

  save(content: string) {
    const sermons = this.storage.get<Sermon[]>('sermons') || [];
    sermons.push({ id: Date.now(), title: this.theme || 'Untitled', content });
    this.storage.set('sermons', sermons);
    this.generated = '';
    this.theme = '';
    this.length = 5;
    alert('Sermon saved');
  }

  cancel() {
    this.generated = '';
  }
}
