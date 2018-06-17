// Import APIs from `common` exposed on the device here.
/// <reference path="../../common/global-types/index.d.ts" />
/// <reference path="../../common/global-types/messaging.d.ts" />
/// <reference path="../../common/global-types/settings.d.ts" />

// Additional global device-specific imports.
/// <reference path="document.d.ts" />

declare const enum AppState {
  Loaded = 'loaded',
  Loading = 'loading',
  Disconnected = 'disconnected',
  Error = 'error',
}
