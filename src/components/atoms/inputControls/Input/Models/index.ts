import { Component } from "react";
import { TextInputProps } from "react-native";
import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfInput = TextInputProps & {
  theme: ModelOfTheme;
  label: string,
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>,
  isSecurityTextEntry?: boolean,
  error?: string | boolean,
  startAnimate?: boolean,
}

export type ModelOfInputMoveLabel = {
  x: number,
  y: number
}

export type ModelOfInputController = {
  isSecurityTextEntry: boolean,
}

export type ModelOfInputStyleService = {
  error: string | boolean,
}

export class Input extends Component<ModelOfInput> {}
