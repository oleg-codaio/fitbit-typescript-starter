/// <reference path="./global-types/index.d.ts" />
import {peerSocket} from 'messaging';

import {App} from './app';

const app = new App();
app.updateUI(AppState.Disconnected);

peerSocket.onopen = () => {
  app.updateUI(AppState.Loading);
};

peerSocket.onmessage = (evt: any) => {
  app.updateUI(AppState.Loaded, evt.data);
};

peerSocket.onerror = (err: any) => {
  app.updateUI(AppState.Error);
};
