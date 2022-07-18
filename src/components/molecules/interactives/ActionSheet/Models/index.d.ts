import { ModelOfTheme } from "@soccerapp/theme";
import React, { Component } from "react";

export interface ModelOfActionSheet {
  theme: ModelOfTheme;
  dismiss: () => void;
  visible: boolean;
  children: React.ReactNode;
}

export class ActionSheet extends Component<ModelOfActionSheet> {}
