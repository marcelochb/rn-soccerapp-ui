import { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { Component, ReactNode } from "react";
import { ModelOfTheme } from "@soccerapp/theme";

type ModelOfTabBarViewParameters = {
  navigationState: NavigationState<{ key: string; title: string }>;
};

export type ModelOfTabBar = SceneRendererProps & ModelOfTabBarViewParameters;

export type ModelOfTabBarView = {
  FirstTab:  React.ComponentType<{}>;
  firstTabTitle: string;
  FirstTabBadge?: number;
  SecondTab: React.ComponentType<{}>;
  secondTabTitle: string;
  SecondTabBadge?: number;
  theme: ModelOfTheme;
}

export class TabBarView extends Component<ModelOfTabBarView> {}
