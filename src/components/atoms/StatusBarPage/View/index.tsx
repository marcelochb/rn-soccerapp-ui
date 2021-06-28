import React from 'react';
import { StatusBar } from 'react-native';
import { ModelOfStatusBarPage } from '../Models';

export const StatusBarPage: React.FC<ModelOfStatusBarPage> = ({
  theme,
  isStatusBarLight = false,
}) => {
  const { colors } = theme;
  return (
    <StatusBar
      backgroundColor={isStatusBarLight ? colors.background : colors.elements}
      barStyle={isStatusBarLight ? 'dark-content' : 'light-content'}
    />

  );
}
