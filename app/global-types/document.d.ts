declare module 'document' {
  interface Element {
    text: string;
  }

  interface Document {
    getElementById(id: string): Element | null;
  }

  const document: Document;

  export default document;
}
