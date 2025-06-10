export class AppComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-app>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Sermon Companion</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <home-page></home-page>
        </ion-content>
      </ion-app>
    `;
  }
}
