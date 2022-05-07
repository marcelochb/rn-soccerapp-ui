import { ModelOfTheme } from "@soccerapp/theme"
import { StyleSheet } from "react-native"

export const styles = (theme: ModelOfTheme) => {
  return StyleSheet.create({
     yearMonth: {textTransform: 'capitalize', marginBottom: theme.metrics.base}
  })
}
