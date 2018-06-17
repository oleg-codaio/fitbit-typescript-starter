/**
 * See https://dev.fitbit.com/build/reference/companion-api/settings/
 */
declare module 'settings' {
  interface SettingsStorage {
    onchange: Function;
    getItem: (key: string) => string | undefined;
  }

  const settingsStorage: SettingsStorage;
}
