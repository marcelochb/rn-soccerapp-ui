import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ModelOfButtonBase, ModelOfButtonFixed, ModelOfButtonLink } from '../Models';
import { Texts } from '@src/components/Atoms';
import { styles } from './styles';

const Base: React.FC<ModelOfButtonBase> = ({
  label, onPress,
  isLoading = false, isDisabled = false,
  isOutline = false, style, theme
}) => {
  const disabled = isLoading || isDisabled;
  return (
    <TouchableOpacity
      style={[styles(theme).base, style, isOutline ? styles(theme).outline : {}]}
      onPress={onPress} disabled={disabled}>
      <Texts.Button theme={theme} isOutline={isOutline}
        isLoading={isLoading}>
        {label}
      </Texts.Button>
    </TouchableOpacity>
  );
}

const Fixed: React.FC<ModelOfButtonFixed> = ({
  onPress,
  IconSVG,
  theme,
  style
}) => {
  return (
    <TouchableOpacity style={[styles(theme).fixed, style]}
      onPress={onPress}
    >
      {IconSVG && <IconSVG fill={theme.colors.textElements} />}
    </TouchableOpacity>
  );
}

const Link: React.FC<ModelOfButtonLink> = ({
  label,
  style,
  styleLabel,
  IconSVG,
  onPress,
  IconColor,
  theme,
}) => {
  const colorIcon = IconColor ?? theme.colors.textSecundary;
  return (
    <TouchableOpacity style={[styles(theme).link, style]} onPress={onPress} >
      <View style={[styles(theme).content, IconSVG ? styles(theme).viewSVG : {}]}>
        {label && <Texts.Link theme={theme} style={styleLabel}>{label}</Texts.Link>}
        {IconSVG && <IconSVG fill={colorIcon} />}
      </View>
    </TouchableOpacity>
  );
}


export const Buttons = { Base, Fixed, Link };
