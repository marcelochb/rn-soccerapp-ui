import { StyleSheet } from 'react-native';
import { ModelOfTheme } from '@soccerapp/theme';

export const styles = (theme: ModelOfTheme) => {
  const { metrics, colors } = theme;
  return StyleSheet.create({
    base: {
      width: metrics.buttonWidth,
      height: metrics.buttonHeight,
      backgroundColor: colors.elements,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    outline: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.elements,
    },
    fixed: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.elements,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: colors.textElements,
      borderRadius: metrics.radiusRounded,
      width: 65,
      height: 65,
      shadowColor: colors.elements,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 1,
      position: 'absolute',
      bottom: 20,
      left: metrics.screenWidth / 1.3,
    },
    link: {
      width: metrics.buttonWidth,
      height: metrics.buttonHeight,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    content: { width: '100%' },
    viewSVG: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
