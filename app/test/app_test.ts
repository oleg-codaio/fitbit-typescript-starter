import {assert} from 'chai';

import {App as AppType} from '../app';

import {FakeDocument, mockedRequire} from './test_utils';

const {App} = mockedRequire('../app');

describe('App', () => {
  let app: AppType;

  beforeEach(() => {
    app = new App();
  });

  it('should update', () => {
    app.updateUI(AppState.Loaded, 'Foo');
    assert.equal(FakeDocument.getElementById('message').text, 'loaded: Foo');
  });
});
