import { Component } from 'react';
import { ReactNode } from 'react';
import { ModelOfTheme } from '@soccerapp/theme';

export type ModelOfPageWapper = {
  isStatusBarLight?: boolean;
  isScrollForm?: boolean;
  Header?: ReactNode;
  ButtonFixed?: ReactNode;
  loading?: boolean;
  noHorizontalPadding?: boolean;
  theme: ModelOfTheme;
  children: ReactNode;
  actionSheetBody?: ReactNode;
  hasActionSheet?: boolean;
  actionSheetDismiss?: () => void;
  actionSheetVisible?: boolean;
};

export class PageWrapper extends Component<ModelOfPageWapper> {}
