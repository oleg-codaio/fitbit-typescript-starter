/// <reference path="../../common/global-types/index.d.ts" />

import * as _React from './react';
import {SettingsStorage} from 'settings';

// JSX globals for the settings page.
declare global {
  const React: typeof _React;

  function createComponent(): JSX.Element;

  // Settings - https://dev.fitbit.com/build/reference/settings-api/#components

  function registerSettingsPage(impl: (props: RenderSettingsProps) => JSX.Element): void;

  interface PageProps {}
  function Page(): React.Component<PageProps>;

  interface SectionProps {
    title: string | JSX.Element;
    description?: string;
  }
  function Section(): React.Component<SectionProps>;

  interface LinkProps {
    source: string;
  }
  function Link(): React.Component<LinkProps>;

  interface TextProps {
    bold?: boolean;
    italic?: boolean;
    align?: 'left' | 'center' | 'right';
  }
  function Text(): React.Component<TextProps>;

  interface TextImageRowProps {
    // TODO
  }
  function TextImage(): React.Component<TextImageRowProps>;

  interface ButtonProps {
    // TODO
  }
  function Button(): React.Component<ButtonProps>;

  interface ToggleProps {
    // TODO
  }
  function Toggle(): React.Component<ToggleProps>;

  interface SliderProps {
    // TODO
  }
  function Slider(): React.Component<SliderProps>;

  interface TextInputProps<OptionT extends {name: string} = {name: string}> {
    title?: string;
    label?: string;
    placeholder?: string;
    action?: string;
    type?: string;
    disabled?: boolean;
    settingsKey?: string;
    onChange?: (value: string) => void;
    renderItem?: (item: OptionT) => JSX.Element;
    onAutocomplete?: (value: string) => Promise<OptionT[]> | OptionT[];
    renderAutocomplete?: (item: OptionT, value: string) => JSX.Element;
  }
  function TextInput(): React.Component<TextInputProps>;

  interface ColorSelectProps {
    // TODO
  }
  function ColorSelect(): React.Component<ColorSelectProps>;

  interface SelectProps<OptionT extends {name: string; value?: string} = {name: string}> {
    title?: string;
    selectViewTitle?: string;
    label: string;
    settingsKey?: string;
    options: OptionT[];
    multiple?: boolean;
    disabled?: boolean;
    renderItem?: (item: OptionT) => JSX.Element;
    onSelected?: (info: {selected: number[]; values: string[]}) => void;
  }
  function Select(): React.Component<SelectProps>;

  interface AdditiveListProps<OptionT extends {name: string} = {name: string}> {
    title: string;
    settingsKey: string;
    maxItems?: number;
    minItems?: number;
    renderItem?: (item: OptionT) => JSX.Element;
    addAction?: JSX.Element;
    onListChange?: (values: OptionT[]) => void;
  }
  function AdditiveList(): React.Component<AdditiveListProps>;

  interface OAuthProps {
    // TODO
  }
  function OAuth(): React.Component<OAuthProps>;

  interface StravaLoginProps {
    // TODO
  }
  function StravaLogin(): React.Component<StravaLoginProps>;

  interface ImagePickerProps {
    // TODO
  }
  function ImagePicker(): React.Component<ImagePickerProps>;

  interface RenderSettingsProps {
    settings: {[key: string]: string | undefined};
    settingsStorage: SettingsStorage;
  }
}
