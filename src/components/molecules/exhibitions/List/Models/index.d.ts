import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { ListRenderItem, StyleProp, ViewStyle } from "react-native";

export type ModelOfList<ItemT = any> = {
  horizontal?: boolean;
  data?: Array<ItemT>;
  item: ListRenderItem<ItemT> | null | undefined;
  style?: StyleProp<ViewStyle>;
  theme: ModelOfTheme
}

export class List<ItemT = any> extends Component<ModelOfList<ItemT>> {}
