import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ModelOfNotificationIcon } from '../Models';

import IconCheckCicle from '@src/assetsui/Icons/iconCheckCircle.svg';
import IconWarning from '@src/assetsui/Icons/iconWarning.svg';
import IconDangerous from '@src/assetsui/Icons/iconDangerous.svg';
import { ModelOfTheme } from '@soccerapp/theme';

export const NotificationIcon: React.FC<ModelOfNotificationIcon> = ({ type, theme }) => {
  if (type === 'Sucesso') return (
    <View style={[styles(theme).container, styles(theme).succes]}>
      <IconCheckCicle fill={theme.colors.success} />
    </View>
  );
  else if (type === 'Atenção') return (
    <View style={[styles(theme).container, styles(theme).warn]}>
      <IconWarning fill={theme.colors.warn} />
    </View>
  );
  else if (type === 'Erro') return (
    <View style={[styles(theme).container, styles(theme).error]}>
      <IconDangerous fill={theme.colors.error} />
    </View>
  );
  else return null
}

const styles = (theme: ModelOfTheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      borderLeftWidth: 4,
      padding: metrics.base,
      justifyContent: 'center'
    },
    error: { borderLeftColor: colors.error, },
    warn: { borderLeftColor: colors.warn, },
    succes: { borderLeftColor: colors.success, },

  })
}
