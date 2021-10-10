import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { ModelOfListItemPlayer } from '../Models';
import { Avatar, Texts } from '../../../../../components/atoms';
import IconArrowRight from '@src/assets/Icons/iconArrowRight.svg';
import { styles } from './styles';

export const ListItemPlayer: React.FC<ModelOfListItemPlayer> = ({
  name,
  nickname,
  navigateTo,
  avatarSource,
  theme
}) => {
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).content}>

        <Avatar theme={theme} source={avatarSource} small />
        <View style={styles(theme).viewName}>
          <Texts.Body isTextElement theme={theme}>{nickname}</Texts.Body>
          <Texts.Body theme={theme} style={styles(theme).label}>{` (${name})`}</Texts.Body>
        </View>
        <View style={styles(theme).viewData}>
          <View style={styles(theme).viewDataItem}>
            <Texts.Body theme={theme} style={styles(theme).label}>Jogos</Texts.Body>
            <Texts.Body theme={theme} isTextElement>-</Texts.Body>
          </View>
          <View style={styles(theme).viewDataItem}>
            <Texts.Body theme={theme} style={styles(theme).label}>Vitórias</Texts.Body>
            <Texts.Body theme={theme} isTextElement>-</Texts.Body>
          </View>
          <View style={styles(theme).viewDataItem}>
            <Texts.Body theme={theme} style={styles(theme).label}>Gols</Texts.Body>
            <Texts.Body theme={theme} isTextElement>-</Texts.Body>
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback style={{ flex: 1 }}
        onPress={navigateTo}
      >
        <View style={styles(theme).viewBottom}>
          <Texts.Body theme={theme}>Perfil</Texts.Body>
          <IconArrowRight fill={theme.colors.textElements} width={20} />
        </View>
      </TouchableWithoutFeedback>
    </View >
  );
}

