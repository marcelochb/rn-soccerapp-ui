import { Component } from 'react';
import { ReactNode } from 'react';
import { ModelOfTheme } from '@soccerapp/theme';

export type ModelOfPageWapper = {
  isStatusBarLight?: boolean;
  isScrollForm?: boolean;
  isScrollList?: boolean;
  Header?: ReactNode;
  ButtonFixed?: ReactNode;
  loading?: boolean;
  noHorizontalPadding?: boolean;
  theme: ModelOfTheme;
  children: ReactNode;
};

export class PageWrapper extends Component<ModelOfPageWapper> {}
