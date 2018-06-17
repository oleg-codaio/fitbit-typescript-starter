/// <reference path="../global-types/index.d.ts" />
import document, {Element} from 'document';
import {load} from 'proxyquire';

export const FakeDocument = {
  '@noCallThru': true,
  _elements: {} as {[key: string]: Element},

  getElementById(id: string): Element {
    return this._elements[id] || (this._elements[id] = {text: ''});
  },
};
(FakeDocument as any).default = FakeDocument;

export function mockedRequire<T>(path: string): T {
  return load<T>(path, {
    document: FakeDocument as typeof document,
  });
}
