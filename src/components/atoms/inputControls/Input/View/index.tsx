import React from 'react';
import { View, TextInput, Animated, Text, StyleSheet } from 'react-native';
import { ModelOfInput } from '../Models';
import { useInputController } from '../Controller';

import IconPasswordOff from '@src/assets/Icons/iconPasswordOff.svg';
import IconPasswordOn from '@src/assets/Icons/iconPasswordOn.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModelOfTheme } from '@soccerapp/theme';
import { Texts } from '@src/components/Atoms';

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
  const { animateLabel } = getController;
  return (
    <>
      <View style={[styles(theme).container, style, error ? styles(theme).errorColor : {}]}>
        <Animated.View style={[styles(theme).viewLabel, editable ? animateLabel.getLayout() : {}]}>
          {IconSVG && <IconSVG fill={theme.colors.textSecundary} width={styles(theme).icon.width} height={styles(theme).icon.height} />}
          <Texts.SubTitle theme={theme} style={styles(theme).label}>{label}</Texts.SubTitle>
        </Animated.View>
        <View style={styles(theme).viewInput}>
          {startAnimate && handleController.moveLabelUp() && animateLabel.stopAnimation()}
          <TextInput
            style={styles(theme).input}
            onFocus={handleController.moveLabelUp}
            onBlur={({ nativeEvent }) => handleController.moveLabelDown(nativeEvent)}
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
    </>
  );
}
const styles = (theme: ModelOfTheme) => {
  const { colors, metrics, fontFamily, fontSize } = theme;
  return StyleSheet.create({
    container: {
      borderBottomColor: colors.text,
      borderBottomWidth: 2,
    },
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
    },
    password: {
      paddingHorizontal: 20,
    },
    viewLabel: { flexDirection: 'row', alignItems: 'center' },
    viewInput: { flexDirection: 'row' }
  })
};
