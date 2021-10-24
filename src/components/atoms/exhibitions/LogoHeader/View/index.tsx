import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ModelOfTheme } from '@soccerapp/theme';
import { ModelOfLogoHeader } from '../Models';


export const LogoHeader: React.FC<ModelOfLogoHeader> = ({theme,source}) => {
  return (
    <Image source={source} style={styles(theme).imageLogo} />
  );
}

const styles = (theme:ModelOfTheme) => StyleSheet.create({
  imageLogo: {
    width: 35,
    height: 35,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginLeft: theme.metrics.base,
    marginBottom: theme.metrics.base
  },
})
