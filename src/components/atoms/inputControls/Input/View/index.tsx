import React from 'react';
import { View, TextInput, Animated, Text, StyleSheet } from 'react-native';
import { ModelOfInput } from '../Models';
import { useInputController } from '../Controller';

import IconPasswordOff from '@src/assetsui/Icons/iconPasswordOff.svg';
import IconPasswordOn from '@src/assetsui/Icons/iconPasswordOn.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModelOfTheme } from '@soccerapp/theme';
import { Texts } from '../../../../atoms';

export const Input: React.FC<ModelOfInput> = ({
  theme,
  label,
  IconSVG,
  isSecurityTextEntry = false,
  error = false,
  style,
  editable = true,
  startAnimate = false,
  ...rest
}) => {
  const { getController, handleController } = useInputController({ isSecurityTextEntry });
  return (
    <View style={style}>
      <Texts.SubTitle theme={theme} style={styles(theme).subtitle}>{label}</Texts.SubTitle>
      <View style={[styles(theme).container, error ? styles(theme).errorColor : {}]}>
        <View style={styles(theme).viewInput}>
          {IconSVG && <IconSVG fill={theme.colors.textSecundary} width={styles(theme).icon.width} height={styles(theme).icon.height} />}
          <TextInput
            style={styles(theme).input}
            placeholder={label}
            secureTextEntry={getController.isPasswordVisible}
            editable={editable}
            {...rest}
          />
          {isSecurityTextEntry &&
            <TouchableOpacity style={styles(theme).password} onPress={handleController.tooglePasswordVisible}>
              {
                getController.isPasswordVisible
                  ? <IconPasswordOn fill={theme.colors.textSecundary} width={styles(theme).icon.width} height={styles(theme).icon.height} />
                  : <IconPasswordOff fill={theme.colors.textSecundary} width={styles(theme).icon.width} height={styles(theme).icon.height} />
              }
            </TouchableOpacity>
          }
        </View>
      </View>
      {(error) &&
        <Texts.Error theme={theme}>{error}</Texts.Error>}
    </View>
  );
}
const styles = (theme: ModelOfTheme) => {
  const { colors, metrics, fontFamily, fontSize } = theme;
  return StyleSheet.create({
    container: {
      borderBottomColor: colors.elements,
      borderBottomWidth: theme.metrics.borderWidthLarger,
      padding: metrics.base,
    },
    subtitle: {textTransform: 'capitalize', marginBottom: metrics.smallest},
    errorColor: { borderBottomColor: colors.textHighlight },
    label: {
      color: colors.textSecundary,
      marginLeft: metrics.base
    },
    icon: {
      width: 20,
      height: 20,
    },
    input: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.base,
      color: colors.text,
      flex: 1,
      marginLeft: metrics.small
    },
    password: {
      paddingHorizontal: metrics.base,
    },
    viewLabel: { flexDirection: 'row', alignItems: 'center' },
    viewInput: { flexDirection: 'row', alignItems: 'center' }
  })
};
