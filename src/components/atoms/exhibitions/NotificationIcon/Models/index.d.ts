import { ModelOfPopupNotificationType } from "@src/components/Molecules/PopupNotification/Models";
import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfNotificationIcon = {
  theme: ModelOfTheme;
  type: ModelOfPopupNotificationType;
}

export class NotificationIcon extends Component<ModelOfNotificationIcon> {}
