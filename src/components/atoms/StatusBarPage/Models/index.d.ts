import {Component} from 'react';
import { ModelOfTheme } from "@src/theme";

export type ModelOfStatusBarPage = {
  theme: ModelOfTheme,
  isStatusBarLight?: boolean,
}

export class StatusBarPage extends Component<ModelOfStatusBarPage> {}
