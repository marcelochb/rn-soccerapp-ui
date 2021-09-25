import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.elements,
    borderStyle: 'solid',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: { borderColor: theme.colors.textHighlight },
  image: {
    borderWidth: 1,
    borderColor: theme.colors.elements,
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  small: {
    width: 60,
    height: 60,
  }
});
