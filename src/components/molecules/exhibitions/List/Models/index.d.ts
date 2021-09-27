import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ModelOfList<ItemT = any> = {
  horizontal?: boolean;
  data?: Array<ItemT>;
  item: (param:ItemT) => React.ReactElement | null;
  style?: StyleProp<ViewStyle>;
  theme: ModelOfTheme
}

export class List extends Component<ModelOfList> {}
