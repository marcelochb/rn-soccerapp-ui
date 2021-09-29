import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfListItemNotification = {
  theme: ModelOfTheme,
  onPressed: (() => void) | undefined,
  name: string | undefined;
  lastName: string | undefined;
  nickName: string | undefined;
  playerPosition: string | undefined;
  createdDistance: string | undefined;
}

export class ListItemNotification extends Component<ModelOfListItemNotification> {}
