import {Component} from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";
import { ModelOfTheme } from "@src/theme";

export type ModelOfButtonBase = {
  theme: ModelOfTheme;
  label: string;
  testID?: string;
  onPress:
    | (((event: GestureResponderEvent) => void) &
        ((e: GestureResponderEvent) => void))
    | undefined;
  isLoading?: boolean;
  isDisabled?: boolean;
  isOutline?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type ModelOfButtonFixed = {
  theme: ModelOfTheme;
  IconSVG: React.FC<React.SVGProps<SVGSVGElement>>,
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export type ModelOfButtonLink =  {
  theme: ModelOfTheme;
  label?: string,
  styleLabel?: StyleProp<TextStyle>;
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>,
  style?: StyleProp<ViewStyle>;
  onPress:
  | ((() => void) & (() => void))
  | undefined;
  IconColor?: string;
}

export class Base extends Component<ModelOfButtonBase> {}
export class Fixed extends Component<ModelOfButtonFixed> {}
export class Link extends Component<ModelOfButtonLink> {}
