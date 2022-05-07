import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { DefaultSectionT, SectionListData, SectionListRenderItem, StyleProp, ViewStyle } from "react-native";

export type ModelOfListGrouped<ItemT = any,SectionT = DefaultSectionT> = {
  horizontal?: boolean;
  data: Array<SectionListData<ItemT, SectionT>>;
  item: SectionListRenderItem<ItemT, SectionT> | undefined;
  header: ((info: { section: SectionListData<ItemT, SectionT> }) => React.ReactElement | null) | undefined;
  style?: StyleProp<ViewStyle>;
  theme: ModelOfTheme
}

export class ListGrouped<ItemT = any,SectionT = DefaultSectionT> extends Component<ModelOfListGrouped<ItemT,SectionT>> {}
