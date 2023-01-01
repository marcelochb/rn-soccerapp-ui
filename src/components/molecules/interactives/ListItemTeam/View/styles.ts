import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecundary,
    borderRadius: theme.metrics.radiusBase,
    shadowColor: theme.colors.elements,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginBottom: theme.metrics.base,
  },
  content: {
    flexDirection: 'row',
  },
  select: {
    color: theme.colors.text,
    textAlign: 'right',
  },
  edit: {
    color: theme.colors.text,
    textAlign: 'left',
  },
  viewBottom: {
    backgroundColor: theme.colors.background,
    height: 40,
    borderBottomEndRadius: theme.metrics.radiusBase,
    borderBottomStartRadius: theme.metrics.radiusBase,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  viewButton: {
    paddingHorizontal: theme.metrics.base,
  },
  viewLeft: {
    padding: theme.metrics.base,
  },
  viewRight: { justifyContent: 'center', marginLeft: theme.metrics.base },
  name: {
    color: theme.colors.textSecundary,
    fontFamily: 'Roboto-LightItalic',
  },
})
