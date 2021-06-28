import {Component} from 'react';
import { ModelOfTheme } from "@src/theme";
import { StyleProp, TextStyle } from "react-native";

export type ModelOfTexts = {
  theme: ModelOfTheme;
  style?: StyleProp<TextStyle>;
  small?: boolean;
  isLoading?: boolean;
  isOutline?: boolean;
  isTextElement?: boolean;
}

export type Teste = {
  Body: Component<ModelOfTexts>
}

export class Body extends Component<ModelOfTexts> {}
export class Title extends Component<ModelOfTexts> {}
export class SubTitle extends Component<ModelOfTexts> {}
export class Error extends Component<ModelOfTexts> {}
export class Link extends Component<ModelOfTexts> {}
