/// <reference path="./global-types/index.d.ts" />

function renderSettings(props: RenderSettingsProps): JSX.Element {
  return (
    <Page>
      <Section title={<Text bold>About</Text>}>
        <Text>Configure your settings here.</Text>
        <TextInput label="Message" settingsKey="message" />
      </Section>
    </Page>
  );
}

registerSettingsPage(renderSettings);
