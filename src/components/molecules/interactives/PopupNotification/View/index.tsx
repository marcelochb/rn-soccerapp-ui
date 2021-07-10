import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

import { ModelOfTheme } from '@soccerapp/theme';

import { ModelOfPopupNotification } from '../Models';
import IconClear from '@src/assets/Icons/iconClear.svg';
import { NotificationIcon, Texts } from '@src/components/atoms';
import { Buttons } from '../../Buttons/View';

export const PopupNotification: React.FC<ModelOfPopupNotification> = ({
  theme,
  visible,
  type,
  text,
  onHandler,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles(theme).container}>
        <View style={styles(theme).content}>
          <NotificationIcon theme={theme} type={type} />
          <View style={{ flex: 1 }}>
            <Texts.Title theme={theme} small style={styles(theme).title}>{type}</Texts.Title>
            <Texts.SubTitle theme={theme} style={styles(theme).text}>{text}</Texts.SubTitle>
          </View>
          <View style={{ padding: theme.metrics.base }}>
            <Buttons.Link
              theme={theme}
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

const styles = (theme: ModelOfTheme) => {
  const { colors, metrics, fontFamily } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundModal,
      paddingVertical: 64,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: colors.background,
      width: '90%',
      flexDirection: 'row',
      padding: metrics.base,
      borderRadius: metrics.radiusBase
    },
    title: { paddingTop: metrics.base, color: colors.textSecundary },
    text: {
      fontFamily: fontFamily.light,
    },
  })
}
