import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfListItemPlayer = {
  avatarSource: string | undefined;
  nickname: string | undefined;
  name: string | undefined;
  navigateTo: (() => void) | undefined;
  theme: ModelOfTheme;
}

export class ListItemPlayer extends Component<ModelOfListItemPlayer> {}
