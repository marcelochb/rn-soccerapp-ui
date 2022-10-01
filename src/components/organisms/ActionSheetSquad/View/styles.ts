import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme:ModelOfTheme) => {
  const {metrics, fontSize,colors} = theme;
  return StyleSheet.create({
    container: {
      marginTop: metrics.base,
      marginHorizontal: metrics.large,
      marginBottom: metrics.largest,
    },
    content: {
      marginVertical: metrics.small,
      backgroundColor: colors.elementsThird,
      borderRadius: metrics.radiusBase,
      padding: metrics.base
    },
    label: {
      fontSize: fontSize.largest,
    },
    title: {
      textAlign: 'center',
      marginBottom: metrics.large
    },
    button: {
      marginTop: metrics.large,
    }
  })
}
