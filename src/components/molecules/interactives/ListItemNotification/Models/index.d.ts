import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfListItemNotification = {
  theme: ModelOfTheme,
  onPressed: (() => void) | undefined,
  name: string;
  lastName: string;
  nickName: string;
  playerPosition: string;
  createdDistance: string;
}

export class ListItemNotification extends Component<ModelOfListItemNotification> {}
