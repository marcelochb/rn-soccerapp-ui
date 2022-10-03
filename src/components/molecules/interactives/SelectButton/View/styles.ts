import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => {
  const {metrics, colors} = theme;
  return StyleSheet.create({
    content: {
      marginVertical: metrics.small,
      backgroundColor: colors.elementsThird,
      borderRadius: metrics.radiusBase,
      padding: metrics.large,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colors.elementsThird,
      borderWidth: 1
    },
    selected: {
      borderColor: colors.elements,
    },
  })
}
