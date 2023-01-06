import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { RadioButton, Texts } from '../../../../atoms';
import { ModelOfSelectButton } from '../Models';
import { styles } from './styles';

export const SelectButton: React.FC<ModelOfSelectButton> = ({
  theme,
  onClick,
  label,
  checked
}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[styles(theme).content, checked ? styles(theme).selected : {}]}>
        <Texts.Title theme={theme}>{label}</Texts.Title>
        <RadioButton theme={theme} isChecked={checked}/>
      </View>
  </TouchableWithoutFeedback>
  );
}
