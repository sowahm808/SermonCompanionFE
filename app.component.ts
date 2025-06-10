export class AppComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-app>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Sermon Companion</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content id="container"></ion-content>
      </ion-app>
    `;
    this.container = this.querySelector('#container') as HTMLElement;
    this.loadHome();
  }

  private container!: HTMLElement;

  private loadHome() {
    const home = document.createElement('home-page');
    home.addEventListener('generated', (e: Event) => {
      const outline = (e as CustomEvent<string>).detail;
      this.loadEditor(outline);
    });
    home.addEventListener('open-community', () => this.loadCommunity());
    this.container.innerHTML = '';
    this.container.appendChild(home);
  }

  private loadEditor(content: string) {
    const editor = document.createElement('sermon-editor') as any;
    (editor as any).content = content;
    editor.addEventListener('save', (e: Event) => {
      const text = (e as CustomEvent<string>).detail;
      try {
        localStorage.setItem('sermon', text);
      } catch {}
      alert('Sermon saved');
      this.loadHome();
    });
    editor.addEventListener('back', () => this.loadHome());
    this.container.innerHTML = '';
    this.container.appendChild(editor);
  }

  private loadCommunity() {
    const community = document.createElement('community-feed');
    community.addEventListener('back', () => this.loadHome());
    this.container.innerHTML = '';
    this.container.appendChild(community);
  }
}
