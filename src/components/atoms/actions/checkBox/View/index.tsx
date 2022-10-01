import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ModelOfCheckBox } from '../Models';
import IconCheckBox from '@src/assetsui/Icons/iconCheckBox.svg';
import IconCheckBoxOutlineBlank from '@src/assetsui/Icons/iconCheckBoxOutlineBlank.svg';
import IconRadioButtonChecked from '@src/assetsui/Icons/iconRadioButtonChecked.svg';
import IconRadioButtonUnchecked from '@src/assetsui/Icons/iconRadioButtonUnchecked.svg';
import { ModelOfTheme } from '@soccerapp/theme';
import { Texts } from '../../../exhibitions';

export const CheckBox: React.FC<ModelOfCheckBox> = (
  {
    label,
    isChecked,
    onClick,
    style,
    styleLabel,
    theme,
    isRadioButton = false,
    disable = false,
  }
) => {
  const IconChecked = isRadioButton ? IconRadioButtonChecked : IconCheckBox;
  const IconUnchecked = isRadioButton ? IconRadioButtonUnchecked : IconCheckBoxOutlineBlank;
  return (
    <TouchableWithoutFeedback style={[styles(theme).container, style]} onPress={onClick} disabled={disable}>
      {isChecked
        ? (<IconChecked fill={'#000'} />)
        : (<IconUnchecked fill={'#000'} />)
      }
      <Texts.Body theme={theme} style={[styles(theme).label, styleLabel]}>{label}</Texts.Body>
    </TouchableWithoutFeedback>
  );
}
const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: theme.metrics.small,
  }
});
