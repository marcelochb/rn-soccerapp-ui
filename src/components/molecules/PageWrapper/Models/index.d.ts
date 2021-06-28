import {Component} from 'react';
import { ReactNode } from "react";
import { ModelOfTheme } from "@src/theme";

export type ModelOfPageWapper = {
  isStatusBarLight?: boolean,
  isScrollForm?: boolean,
  isScrollList?: boolean,
  Header?: ReactNode;
  ButtonFixed?: ReactNode;
  loading?: boolean;
  noHorizontalPadding?: boolean;
  theme: ModelOfTheme
}

export class PageWrapper extends Component<ModelOfPageWapper> {}
