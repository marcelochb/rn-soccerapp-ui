import { Component, ReactNode } from "react";
import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfPopup ={
  theme: ModelOfTheme;
  visible: boolean,
  onDismiss: () => void;
  firstButton: ReactNode;
  secondButton: ReactNode;
  tertiaryButton?: ReactNode;
}

export class PopupOptions extends Component<ModelOfPopup> {}
