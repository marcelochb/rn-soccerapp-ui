import { StyleSheet } from 'react-native';
import { ModelOfTheme } from '@soccerapp/theme';

export const styles = (theme: ModelOfTheme, isTextElement: boolean = false) => {
  const { fontFamily, fontSize, colors } = theme;
  return StyleSheet.create({
    base: {
      fontFamily: fontFamily.regular,
      color: isTextElement ? colors.textElements : colors.text,
    },
    body: { fontSize: fontSize.base },
    title: { fontSize: fontSize.largest },
    titleSmall: { fontSize: fontSize.large },
    subTitle: { fontSize: fontSize.small },
    error: {
      fontSize: fontSize.small,
      color: colors.textHighlight,
    },
    textElement: { color: colors.textElements },
    link: { color: colors.textHighlight, textAlign: 'center' },
  });
};
