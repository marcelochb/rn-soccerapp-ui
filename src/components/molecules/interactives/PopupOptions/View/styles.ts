import { StyleSheet } from "react-native";
import { ModelOfTheme } from "@soccerapp/theme";

export const styles = (theme: ModelOfTheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundModal,
      paddingVertical: 64,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: colors.background,
      borderRadius: metrics.radiusBase,
      width: '90%'
    },
    firstButton: {
      padding: metrics.base,
      borderRadius: metrics.radiusBase
    },
    button: {
      paddingHorizontal: metrics.base,
      paddingBottom: metrics.base,
      borderRadius: metrics.radiusBase
    },
    title: { textAlign: 'center', paddingTop: metrics.base }
  })
}
