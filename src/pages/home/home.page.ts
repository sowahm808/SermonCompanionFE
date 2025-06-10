export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>Generate Sermon Outline</h2>
        <form id="sermon-form">
          <ion-item>
            <ion-label position="stacked">Theme or Scripture</ion-label>
            <ion-input name="theme" placeholder="Faith, John 3:16" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Length (minutes)</ion-label>
            <ion-input type="number" name="length" min="1" required></ion-input>
          </ion-item>
          <ion-button expand="full" type="submit">Generate</ion-button>
        </form>
        <div id="result"></div>
      </ion-content>
    `;
    this.querySelector('form')?.addEventListener('submit', this.onSubmit.bind(this));
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    (this.querySelector('#result') as HTMLElement).innerText = result.outline || 'Error generating outline';
  }
}

customElements.define('home-page', HomePage);
