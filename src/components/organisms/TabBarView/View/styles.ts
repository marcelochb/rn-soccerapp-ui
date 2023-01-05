import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  tab: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.elements,
    width: '95%',
    alignSelf: 'center',
    marginVertical: theme.metrics.small,
  },
  tabIndicator: {
    backgroundColor: theme.colors.elements,
    height: '100%',
    borderRadius: theme.metrics.radiusBase
  },
  tabIndicatorContainer: {
    borderStyle: 'solid',
    borderWidth: theme.metrics.borderWidthLarger,
    borderRadius: theme.metrics.radiusBase,
    borderColor: theme.colors.elements
  },
})
