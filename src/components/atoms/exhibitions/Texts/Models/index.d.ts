import React, { Component } from 'react';
import { ModelOfTheme } from '@soccerapp/theme';
import { StyleProp, TextStyle } from 'react-native';

export type ModelOfTextsBody = {
  theme: ModelOfTheme;
  style?: StyleProp<TextStyle>;
  small?: boolean;
  isTextElement?: boolean;
  children: React.ReactNode;
}

export type ModelOfTextsTitle = {
  theme: ModelOfTheme;
  style?: StyleProp<TextStyle>;
  small?: boolean;
  isTextElement?: boolean;
  children: React.ReactNode;
}

export type ModelOfTextsSubTitle = {
  theme: ModelOfTheme;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  isTextElement?: boolean;
}

export type ModelOfTextsError = {
  theme: ModelOfTheme;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export type ModelOfTextsButton = {
  theme: ModelOfTheme;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  isLoading?: boolean;
  isOutline?: boolean;
}

export type ModelOfTextsLink = {
  children: React.ReactNode;
  theme: ModelOfTheme;
  style?: StyleProp<TextStyle>;
}


export class Body extends Component<ModelOfTextsBody> {}
export class Title extends Component<ModelOfTextsTitle> {}
export class SubTitle extends Component<ModelOfTextsSubTitle> {}
export class Error extends Component<ModelOfTextsError> {}
export class Button extends Component<ModelOfTextsButton> {}
export class Link extends Component<ModelOfTextsLink> {}
