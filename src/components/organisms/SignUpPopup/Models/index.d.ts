import { Component } from "react";
import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfSignUpPopup = {
  visible: boolean;
  onDismiss: () => void;
  theme: ModelOfTheme;
  firstButtonLabel: string;
  firstButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  firstButtonOnPress: ((() => void) & (() => void))
  secondButtonLabel: string;
  secondButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  secondButtonOnPress: ((() => void) & (() => void))
  tertiaryButtonLabel: string;
  tertiaryButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  tertiaryButtonOnPress: ((() => void) & (() => void))
}

export class SignUpPopup extends Component<ModelOfSignUpPopup> {};
