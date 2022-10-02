import { ModelOfTheme } from "@soccerapp/theme";
import React, { Component } from "react";

export interface ModelOfActionSheetWrapper {
  theme: ModelOfTheme;
  children: React.ReactNode;
}

export class ActionSheetWrapper extends Component<ModelOfActionSheetWrapper> {}
