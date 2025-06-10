import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../core/services/storage.service';
import { Sermon } from '../sermon/create/create-sermon.page';

@Component({
  selector: 'app-community-feed',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './community-feed.component.html',
  styleUrls: ['./community-feed.component.css']
})
export class CommunityFeedComponent {
  @Output() back = new EventEmitter<void>();
  sermons: Sermon[] = [];

  constructor(private storage: StorageService) {
    this.load();
  }

  load() {
    this.sermons = this.storage.get<Sermon[]>('community-sermons') || [];
  }

  share() {
    const local = this.storage.get<Sermon[]>('sermons') || [];
    if (!local.length) {
      alert('No saved sermon to share');
      return;
    }
    const last = local[local.length - 1];
    const shared = this.storage.get<Sermon[]>('community-sermons') || [];
    shared.push({ ...last, id: Date.now() });
    this.storage.set('community-sermons', shared);
    this.load();
  }
}
