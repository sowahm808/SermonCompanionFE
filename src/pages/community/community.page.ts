export class CommunityPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button id="back">Back</ion-button>
          </ion-buttons>
          <ion-title>Community</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Shared sermons will appear here.</p>
      </ion-content>
    `;
    this.querySelector('#back')?.addEventListener('click', () => {
      this.dispatchEvent(new Event('back'));
    });
  }
}

customElements.define('community-page', CommunityPage);
