import { Component } from 'react';
import { ModelOfTheme } from '@soccerapp/theme';

export type ModelOfStatusBarPageWrapper = {
  theme: ModelOfTheme;
  isStatusBarLight?: boolean;
};

export class StatusBarPageWrapper extends Component<ModelOfStatusBarPageWrapper> {}
