import { ModelOfTheme } from "@soccerapp/theme"
import { Component } from "react"
import { GestureResponderEvent } from "react-native";

export type ModelOfActionSheetSquad = {
  theme: ModelOfTheme;
  isCheckedFirstSquad: boolean;
  onClickFirstSquad: () => void;
  isCheckedSecondSquad: boolean;
  onClickSecondSquad: () => void;
  onPress:
  | (((event: GestureResponderEvent) => void) &
      ((e: GestureResponderEvent) => void))
  | undefined;
}

export class ActionSheetSquad extends Component<ModelOfActionSheetSquad> {}
