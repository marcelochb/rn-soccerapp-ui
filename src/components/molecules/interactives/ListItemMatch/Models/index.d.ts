import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { ImageSourcePropType } from "react-native";

export type ModelOfListItemMatch = {
  theme: ModelOfTheme;
  teamCrest?: ImageSourcePropType | undefined;
  teamName:  string;
  monthDay: string;
  weekDay: string;
  matchHour: string;
  opponentTeamCrest: string;
  opponentTeamName: string;
  onPressed: (() => void) | undefined;
}

export class ListItemMatch extends Component<ModelOfListItemMatch> {}
