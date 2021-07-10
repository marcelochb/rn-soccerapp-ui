import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { ModelOfPopup } from '../Models';
import { Texts } from '../../../../atoms';
import { Buttons } from '../../Buttons/View';
import { styles } from './styles';


export const PopupOptions: React.FC<ModelOfPopup> = ({
  theme,
  visible = false,
  onDismiss,
  firstButton,
  secondButton,
  tertiaryButton,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles(theme).container}>
        <View style={styles(theme).content}>
          <Texts.Title theme={theme} small style={styles(theme).title}>Escolha</Texts.Title>
          <View style={styles(theme).firstButton}>
            {firstButton}
          </View>
          <View style={styles(theme).button}>
            {secondButton}
          </View>
          {tertiaryButton && (<View style={styles(theme).button}>
            {tertiaryButton}
          </View>)
          }
          <Buttons.Link theme={theme} label={'Agora não'} onPress={onDismiss} />
        </View>
      </View>
    </Modal>

  );
}
