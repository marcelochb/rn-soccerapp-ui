import { Component } from 'react';
import { ModelOfTheme } from '@soccerapp/theme';

export type ModelOfStatusBarPage = {
  theme: ModelOfTheme;
  isStatusBarLight?: boolean;
};

export class StatusBarPage extends Component<ModelOfStatusBarPage> {}
