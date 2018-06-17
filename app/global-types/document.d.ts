declare module 'document' {
  export interface Element {
    text: string;
  }

  export interface Document {
    getElementById(id: string): Element | null;
  }

  const document: Document;

  export default document;
}
