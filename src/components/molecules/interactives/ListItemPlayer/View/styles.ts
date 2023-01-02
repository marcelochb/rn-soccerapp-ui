import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.elements,
    borderRadius: theme.metrics.radiusBase,
    width: 190,
    height: 180,
    marginRight: theme.metrics.base
  },
  content: {
    paddingHorizontal: theme.metrics.large,
    paddingTop: theme.metrics.large,
    paddingBottom: theme.metrics.base
  },
  viewName: { flexDirection: 'row', alignItems: 'center' },
  label: {
    color: theme.colors.textElementsSecundary
  },
  viewData: {
    marginTop: theme.metrics.large,
  },
  viewDataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
