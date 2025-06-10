import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../core/services/storage.service';

export interface Reflection {
  id: number;
  text: string;
}

@Component({
  selector: 'app-reflection',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './reflection.page.html',
  styleUrls: ['./reflection.page.css']
})
export class ReflectionPage {
  text = '';
  reflections: Reflection[] = [];

  constructor(private storage: StorageService) {
    this.load();
  }

  load() {
    this.reflections = this.storage.get<Reflection[]>('reflections') || [];
  }

  save() {
    const r: Reflection = { id: Date.now(), text: this.text };
    this.reflections.push(r);
    this.storage.set('reflections', this.reflections);
    this.text = '';
  }
}
