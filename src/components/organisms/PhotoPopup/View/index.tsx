import React from 'react';
import { StyleSheet } from 'react-native';
import iconCamera from '@src/assetsui/Icons/iconCamera.svg';
import iconGalery from '@src/assetsui/Icons/iconGalery.svg';
import { ModelOfPhotoPopup } from '../Models';
import { Popups, Buttons } from '../../../molecules';
import { ModelOfTheme } from '@soccerapp/theme';

export const PhotoPopup: React.FC<ModelOfPhotoPopup> = ({
  visible,
  onDismiss,
  onSelectFromGalery,
  onTakePhoto,
  theme,
}) => {
  return (
    <Popups.Options theme={theme} visible={visible} onHandler={onDismiss}
      firstButton={
        <Buttons.Link theme={theme} label={'Selecionar foto'} IconSVG={iconCamera}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={onSelectFromGalery}
        />
      }
      secondButton={
        <Buttons.Link theme={theme} label={'Tirar foto'} IconSVG={iconGalery}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={onTakePhoto}
        />
      }
    />
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  buttonLink: {
    paddingHorizontal: theme.metrics.large,
    alignItems: 'flex-start',
    backgroundColor: theme.colors.backgroundSecundary
  },
  label: { color: theme.colors.text }
})
