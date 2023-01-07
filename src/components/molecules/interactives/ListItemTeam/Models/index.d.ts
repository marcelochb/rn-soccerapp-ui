import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ModelOfListItemTeam = {
  theme: ModelOfTheme;
  avatarSource: string | undefined;
  name: string | undefined;
  labelEdit: string | undefined;
  isSelectable?: boolean;
  responsable: string | undefined;
  phone: string | undefined;
  selectOnPressed: (() => void) | undefined;
  editOnPressed: (() => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

export class ListItemTeam extends Component<ModelOfListItemTeam> {}
