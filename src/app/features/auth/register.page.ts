import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage {
  email = '';
  password = '';
  error = '';

  @Output() registered = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  async register() {
    try {
      const resp = await this.auth.register(this.email, this.password);
      try {
        localStorage.setItem('auth_user', JSON.stringify(resp.user));
      } catch {}
      this.error = '';
      this.registered.emit();
    } catch {
      this.error = 'Registration failed';
    }
  }
}
