import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfBadge = {
  value?: number;
  theme: ModelOfTheme;
}

export class Badge extends Component<ModelOfBadge> {}
