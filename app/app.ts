/// <reference path="./global-types/index.d.ts" />

import document from 'document';

export class App {
  private message = document.getElementById('message')!;

  updateUI(state: AppState, value?: string): void {
    this.message.text = `${state}: ${value}`;
  }
}
