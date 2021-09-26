import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ModelOfCheckBox = {
  label: string;
  isChecked: boolean;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
  isRadioButton?: boolean;
  disable?: boolean;
  theme: ModelOfTheme;
}

export class CheckBox extends Component<ModelOfCheckBox> {}
