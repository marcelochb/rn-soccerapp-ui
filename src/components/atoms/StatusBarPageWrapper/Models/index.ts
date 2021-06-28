import {Component} from 'react';
import { ModelOfTheme } from "@src/theme";

export type ModelOfStatusBarPageWrapper = {
  theme: ModelOfTheme,
  isStatusBarLight?: boolean
}

export class StatusBarPageWrapper extends Component<ModelOfStatusBarPageWrapper> {}
