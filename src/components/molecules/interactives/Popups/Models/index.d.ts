import { Component, ReactNode } from "react";
import { ModelOfTheme } from "@soccerapp/theme";

export type  ModelOfPopupNotificationType = 'Sucesso' | 'Atenção' | 'Erro'

export type ModelOfPopupConfirmation = {
  theme: ModelOfTheme;
  loading: boolean;
  visible: boolean;
  handleButtonPositiveAnswer:  | ((() => void) & (() => void))
  | undefined;
  handleButtonNegativeAnswer:  | ((() => void) & (() => void))
  | undefined;
  lableButtonPositiveAnswer: string;
  question: string;
}

export type ModelOfPopupNotification = {
  theme: ModelOfTheme;
  visible: boolean;
  type: ModelOfPopupNotificationType;
  text: string;
  onHandler: () => void;
}

export type ModelOfPopupOption ={
  theme: ModelOfTheme;
  visible: boolean,
  onHandler: () => void;
  firstButton: ReactNode;
  secondButton: ReactNode;
  tertiaryButton?: ReactNode;
}

export class Confirmation extends Component<ModelOfPopupConfirmation> {}
export class Notification extends Component<ModelOfPopupNotification> {}
export class Options extends Component<ModelOfPopupOption> {}
