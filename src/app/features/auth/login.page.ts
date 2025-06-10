import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  @Output() loggedIn = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  async login() {
    try {
      const resp = await this.auth.login(this.email, this.password);
      try {
        localStorage.setItem('auth_user', JSON.stringify(resp.user));
      } catch {}
      this.error = '';
      this.loggedIn.emit();
    } catch {
      this.error = 'Invalid credentials';
    }
  }
}

