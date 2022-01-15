import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModelOfAvatar } from '../Models';
import IconAddPhoto from '@src/assets/Icons/iconAddPhoto.svg';
import { Image, View } from 'react-native';
import imgAvatar from '@src/assets/Images/Avatar.jpg';
import { styles } from './styles';

export const Avatar: React.FC<ModelOfAvatar> = ({
  style,
  onPress,
  source,
  sourceImage,
  small = false,
  error = false,
  disable = false,
  theme
}) => {
  return (
    small ? (

      <View style={[styles(theme).container, style, styles(theme).small]}>
        <>
          {source
            ? (
              <Image source={{ uri: source }} style={[styles(theme).image, styles(theme).small]} resizeMode='cover' />
            )
            : sourceImage
              ?  (

                <Image source={sourceImage} style={[styles(theme).image, styles(theme).small]} resizeMode='cover' />
              )
              : (
                <Image source={imgAvatar} style={[styles(theme).image, styles(theme).small]} resizeMode='cover' />
              )
          }
        </>
      </View>
    )
      : (

        <TouchableOpacity style={[styles(theme).container, style, error ? styles(theme).error : {}]} onPress={onPress} disabled={disable}>
          <>
            {source
              ? (
                <Image source={{ uri: source }} style={[styles(theme).image, error ? styles(theme).error : {}]} resizeMode='cover' />
              )
              : (

                <IconAddPhoto fill={theme.colors.textSecundary} />
              )
            }
          </>
        </TouchableOpacity>
      )

  );
}

