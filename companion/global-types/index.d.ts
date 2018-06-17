/// <reference path="../../common/global-types/index.d.ts" />
/// <reference path="../../common/global-types/fetch.d.ts" />
/// <reference path="../../common/global-types/messaging.d.ts" />
/// <reference path="../../common/global-types/settings.d.ts" />

import {fetch as fetchFun} from 'fetch';

declare global {
  const fetch: typeof fetchFun;
}
