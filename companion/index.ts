import {peerSocket} from 'messaging';
import {settingsStorage} from 'settings';

import {DefaultMessage} from '../common/constants';

settingsStorage.onchange = () => {
  void sendMessage();
};

peerSocket.onopen = () => {
  void sendMessage();
};

peerSocket.onmessage = (evt: any) => {
  // tslint:disable-next-line:no-console
  console.log(JSON.stringify(evt.data));
};

async function sendMessage() {
  const message = JSON.parse(settingsStorage.getItem('message') || '{}').name;
  if (peerSocket.readyState === peerSocket.OPEN) {
    peerSocket.send(message || DefaultMessage);
  }
}
