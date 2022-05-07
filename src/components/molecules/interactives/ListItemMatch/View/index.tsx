import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Texts } from '../../../../atoms';
import { ModelOfListItemMatch } from '../Models';
import { styles } from './styles';
export const ListItemMatch: React.FC<ModelOfListItemMatch> = ({
  theme,
  teamCrest,
  teamName,
  monthDay,
  weekDay,
  matchHour,
  opponentTeamCrest,
  opponentTeamName,
  onPressed
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressed}>
    <View style={styles(theme).container}>
      <View style={styles(theme).content}>
        <View style={styles(theme).team}>
          <Avatar theme={theme} sourceImage={teamCrest} small ></Avatar>
          <Texts.Body theme={theme}>{teamName}</Texts.Body>
        </View>
        <View style={styles(theme).matchDetail}>
          <Texts.Title theme={theme} style={styles(theme).capitalize}>{monthDay}</Texts.Title>
          <View style={styles(theme).line}/>
          <View style={styles(theme).weekDay}>
            <Texts.SubTitle theme={theme} style={styles(theme).capitalize}>{weekDay}</Texts.SubTitle>
            <Texts.SubTitle theme={theme}> às {matchHour}</Texts.SubTitle>
          </View>
        </View>
        <View style={styles(theme).team}>
          <Avatar theme={theme} source={opponentTeamCrest} small ></Avatar>
          <Texts.Body theme={theme}>{opponentTeamName}</Texts.Body>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}
