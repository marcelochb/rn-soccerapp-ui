import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfCardPlayer = {
  avatarSource: string | undefined;
  nickname: string | undefined;
  name: string | undefined;
  navigateTo: (() => void) | undefined;
  theme: ModelOfTheme;
}
