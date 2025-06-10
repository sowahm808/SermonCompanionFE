import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sermon-editor',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './sermon-editor.component.html',
  styleUrls: ['./sermon-editor.component.css']
})
export class SermonEditorComponent {
  @Input() content = '';
  @Output() save = new EventEmitter<string>();
  @Output() back = new EventEmitter<void>();
}
