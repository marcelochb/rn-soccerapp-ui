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
      padding: metrics.large,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colors.elementsThird,
      borderWidth: theme.metrics.borderWidthLarger
    },
    selected: {
      borderColor: colors.elements,
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
