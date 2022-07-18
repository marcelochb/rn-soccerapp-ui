import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export interface ModelOfActionSheet {
  theme: ModelOfTheme;
}

export class ActionSheet extends Component<ModelOfActionSheet> {}
