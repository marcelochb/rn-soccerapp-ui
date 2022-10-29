import { ModelOfTheme } from "@soccerapp/theme"
import { Component } from "react";

export type ModelOfEmptyMatchList = {
  theme: ModelOfTheme;
}

export class EmptyMatchList extends Component<ModelOfEmptyMatchList> {}
