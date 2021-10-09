import React from 'react';
import { View } from 'react-native';
import { ModelOfHeader } from '../Models';
import { Texts, Avatar } from '../../../atoms';
import { styles } from './styles';


export const Header: React.FC<ModelOfHeader> = ({
  theme,
  nickName,
  playerType,
  sourceAvatar,
  onPressedAvatar,
}) => {
  return (
    <View style={styles(theme).header}>
      <View>
        <Texts.Title theme={theme} style={styles(theme).title}>{nickName}</Texts.Title>
        <View style={styles(theme).header}>
          <Texts.Body isTextElement theme={theme} style={styles(theme).type}>{playerType}</Texts.Body>
          <View style={styles(theme).viewStatistic}>
            <View style={[styles(theme).viewItemStatistic, styles(theme).marginRight]}>
              <Texts.SubTitle isTextElement theme={theme}>Jogos</Texts.SubTitle>
              <Texts.Body isTextElement theme={theme}>-</Texts.Body>
            </View>
            <View style={[styles(theme).viewItemStatistic, styles(theme).marginRight]}>
              <Texts.SubTitle isTextElement theme={theme}>Gols</Texts.SubTitle>
              <Texts.Body isTextElement theme={theme}>-</Texts.Body>
            </View>
            <View style={styles(theme).viewItemStatistic}>
              <Texts.SubTitle isTextElement theme={theme}>Vitorias</Texts.SubTitle>
              <Texts.Body isTextElement theme={theme}>-</Texts.Body>
            </View>
          </View>
        </View>
      </View>
      <Avatar theme={theme} onPress={onPressedAvatar} source={sourceAvatar} />
    </View>

  );
}

