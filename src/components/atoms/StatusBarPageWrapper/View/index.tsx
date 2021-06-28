import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ModelOfStatusBarPageWrapper } from '../Models';
import { ModelOfTheme } from '@src/theme';


export const StatusBarPageWrapper: React.FC<ModelOfStatusBarPageWrapper> = ({
  theme,
  isStatusBarLight = false,
}: ModelOfStatusBarPageWrapper) => {
  return (
    <SafeAreaView style={styles(theme, isStatusBarLight).container} />
  );
}

const styles = (theme: ModelOfTheme, isStatusBarLight: boolean) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: isStatusBarLight ? colors.background : colors.elements
    }
  })
}
