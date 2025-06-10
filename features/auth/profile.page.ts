import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ng-container *ngIf="user; else loggedOut">
        <p>Email: {{ user?.email }}</p>
        <ion-button expand="full" (click)="logout()">Logout</ion-button>
      </ng-container>
      <ng-template #loggedOut>
        <p>You are not logged in.</p>
      </ng-template>
    </ion-content>
  `
})
export class ProfilePage {
  @Output() loggedOut = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  get user() {
    return this.auth.user;
  }

  logout() {
    this.auth.logout();
    this.loggedOut.emit();
  }
}
