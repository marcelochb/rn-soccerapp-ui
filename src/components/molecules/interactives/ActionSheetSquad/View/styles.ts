import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme:ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    container: {
      padding: metrics.large
    }
  })
}
