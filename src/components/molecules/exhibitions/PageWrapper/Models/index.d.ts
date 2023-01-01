import { Component } from 'react';
import { ReactNode } from 'react';
import { ModelOfTheme } from '@soccerapp/theme';

export type ModelOfPageWapper = {
  isStatusBarLight?: boolean;
  isScrollForm?: boolean;
  Header?: ReactNode;
  isHeaderRadius?: boolean;
  ButtonFixed?: ReactNode;
  loading?: boolean;
  noHorizontalPadding?: boolean;
  theme: ModelOfTheme;
  children: ReactNode;
  actionSheet?: ReactNode;
  hideButtonFixed?: boolean;
};

export class PageWrapper extends Component<ModelOfPageWapper> {}
