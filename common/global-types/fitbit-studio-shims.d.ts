// Declare global types already implicitly declared within Fitbit Studio here.
// Adding these types into `index.d.ts` would cause errors in Fitbit Studio.

interface Console {
  log(message: string): void;
}

declare const console: Console;
