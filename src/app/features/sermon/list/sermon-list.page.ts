import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../core/services/storage.service';
import { Sermon } from '../create/create-sermon.page';

@Component({
  selector: 'app-sermon-list',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './sermon-list.page.html',
  styleUrls: ['./sermon-list.page.css']
})
export class SermonListPage {
  sermons: Sermon[] = [];
  @Output() select = new EventEmitter<Sermon>();

  constructor(private storage: StorageService) {
    this.load();
  }

  load() {
    this.sermons = this.storage.get<Sermon[]>('sermons') || [];
  }
}
