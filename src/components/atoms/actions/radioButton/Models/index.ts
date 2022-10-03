import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ModelOfRadioButton = {
  label?: string;
  isChecked: boolean;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  disable?: boolean;
  theme: ModelOfTheme;
}

export class RaioButton extends Component<ModelOfRadioButton> {}
