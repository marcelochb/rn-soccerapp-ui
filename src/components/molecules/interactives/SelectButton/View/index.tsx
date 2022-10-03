import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
    <TouchableWithoutFeedback
    style={[styles(theme).content, checked ? styles(theme).selected : {}]}
    onPress={onClick}
  >
    <Texts.Title theme={theme}>{label}</Texts.Title>
    <RadioButton theme={theme} isChecked={checked}/>
  </TouchableWithoutFeedback>
  );
}
