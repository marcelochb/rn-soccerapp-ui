import { ModelOfTheme } from "@soccerapp/theme"
import { Component } from "react"

export type  ModelOfPopupNotificationType = 'Sucesso' | 'Atenção' | 'Erro'
export type ModelOfPopupNotification = {
  theme: ModelOfTheme
  visible: boolean;
  type: ModelOfPopupNotificationType;
  text: string;
  onHandler: () => void;
}

export class PopupNotification extends Component<ModelOfPopupNotification> {}
