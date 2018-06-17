Unfortunately, Fitbit doesn't yet provide full support for TypeScript, so this directory attempts to add global types
to satisfy the compiler. Each of these APIs should be referenced as needed by the appropriate project
(app/companion/settings).

## `fitbit-studio-shims.d.ts`

Fitbit Studio comes with some global types declared (in addition to the standard ES library). This file is only
imported within TypeScript locally, and should be used to satisfy your local TS compiler.

## `index.d.ts`

Declare any globally-accessible types here that aren't already part of the ES lib.

## Remaining files

Declare libraries from https://dev.fitbit.com/build/reference/companion-api/ and
https://dev.fitbit.com/build/reference/device-api/, to be referenced by `index.d.ts` within `app`, `companion`, and
`settings` as needed.