import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfListItemTeam = {
  theme: ModelOfTheme;
  avatarSource: string | undefined;
  name: string | undefined;
  responsable: string | undefined;
  phone: string | undefined;
  selectOnPressed: (() => void) | undefined;
  editOnPressed: (() => void) | undefined;
}

export class ListItemTeam extends Component<ModelOfListItemTeam> {}
