import React from 'react';
import { View, Modal } from 'react-native';

import { Buttons } from '../../Buttons/View';
import { NotificationIcon, Texts } from '../../../../atoms';

import { ModelOfPopupConfirmation, ModelOfPopupNotification, ModelOfPopupOption } from '../Models';

import IconClear from '@src/assets/Icons/iconClear.svg';

import { styles } from './styles';


const Confirmation: React.FC<ModelOfPopupConfirmation> = ({
  theme,
  loading,
  handleButtonPositiveAnswer,
  handleButtonNegativeAnswer,
  lableButtonPositiveAnswer,
  question,
  visible
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles(theme).container}>
        <View style={styles(theme).content}>
          <View style={styles(theme).viewTop}>
            <NotificationIcon theme={theme} type={"Atenção"} />
            <Texts.Body theme={theme}>{question}</Texts.Body>

          </View>
          <Buttons.Base theme={theme}
            label={lableButtonPositiveAnswer}
            onPress={handleButtonPositiveAnswer}
            style={styles(theme).marginBottom}
            isLoading={loading}
            isOutline
          />
          <Buttons.Link theme={theme}
            onPress={handleButtonNegativeAnswer}
            label='Agora não'
          />
        </View>
      </View>
    </Modal>
  );
}

const Notification: React.FC<ModelOfPopupNotification> = ({
  theme,
  visible,
  type,
  text,
  onHandler,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles(theme).container}>
        <View style={[styles(theme).content, styles(theme).flexDirectionRow]}>
          <NotificationIcon theme={theme} type={type} />
          <View style={{ flex: 1 }}>
            <Texts.Title theme={theme} small style={styles(theme).notificationTitle}>{type}</Texts.Title>
            <Texts.SubTitle theme={theme} >{text}</Texts.SubTitle>
          </View>
          <View style={{ padding: theme.metrics.base }}>
            <Buttons.Link theme={theme}
              onPress={onHandler}
              IconSVG={IconClear}
              IconColor={theme.colors.textSecundary}
            />
          </View>
        </View>
      </View>
    </Modal>

  );
}

const Options: React.FC<ModelOfPopupOption> = ({
  visible = false,
  theme,
  onHandler,
  firstButton,
  secondButton,
  tertiaryButton,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles(theme).container}>
        <View style={styles(theme).content}>
          <Texts.Title theme={theme} small style={styles(theme).optionTitle}>Escolha</Texts.Title>
          <View style={styles(theme).optionFirstButton}>
            {firstButton}
          </View>
          <View style={styles(theme).optionButton}>
            {secondButton}
          </View>
          {tertiaryButton && (<View style={styles(theme).optionButton}>
            {tertiaryButton}
          </View>)
          }
          <Buttons.Link theme={theme} label={'Agora não'} onPress={onHandler} />
        </View>
      </View>
    </Modal>

  );
}

export const Popups = { Confirmation, Notification, Options };
