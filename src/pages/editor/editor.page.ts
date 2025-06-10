export class EditorPage extends HTMLElement {
  set content(value: string) {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button id="back">Back</ion-button>
          </ion-buttons>
          <ion-title>Edit Sermon</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-textarea id="editor" style="height: 60vh">${value}</ion-textarea>
        <ion-button expand="full" id="save">Save</ion-button>
      </ion-content>
    `;
    this.querySelector('#save')?.addEventListener('click', () => {
      const text = (this.querySelector('#editor') as HTMLTextAreaElement).value;
      this.dispatchEvent(new CustomEvent('save', { detail: text }));
    });
    this.querySelector('#back')?.addEventListener('click', () => {
      this.dispatchEvent(new Event('back'));
    });
  }
}

customElements.define('editor-page', EditorPage);
