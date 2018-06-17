/**
 * See https://dev.fitbit.com/build/reference/companion-api/fetch/
 */
declare module 'fetch' {
  function fetch(url: string, opts?: {headers?: Headers; mode?: string}): any;
}
