import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export type ModelOfAvatar = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  source?: string;
  sourceImage?: ImageSourcePropType;
  small?: boolean;
  error?: boolean | string;
  disable?: boolean;
  theme: ModelOfTheme;
}


export class Avatar extends Component<ModelOfAvatar> {}
