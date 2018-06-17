/// <reference path="../../common/global-types/fetch.d.ts" />
/// <reference path="../../common/global-types/index.d.ts" />
/// <reference path="../../common/global-types/messaging.d.ts" />
/// <reference path="../../common/global-types/settings.d.ts" />
/// <reference path="./global.d.ts" />
/// <reference path="./settings-ui.d.ts" />

import {fetch as fetchFun} from 'fetch';

declare global {
  const fetch: typeof fetchFun;
}
