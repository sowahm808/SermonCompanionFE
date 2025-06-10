import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

export interface SermonDetail {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-sermon-detail',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './sermon-detail.page.html',
  styleUrls: ['./sermon-detail.page.css']
})
export class SermonDetailPage {
  @Input() sermon?: SermonDetail;
  @Output() back = new EventEmitter<void>();
}
