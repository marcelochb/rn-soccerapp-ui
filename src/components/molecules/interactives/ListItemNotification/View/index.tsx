import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ModelOfListItemNotification } from '../Models';
import IconFootball from '@src/assets/Icons/iconFootball.svg';
import IconArrowRight from '@src/assets/Icons/iconArrowRight.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Texts } from '../../../../atoms';
import { ModelOfTheme } from '@soccerapp/theme';


export const ListItemNotification: React.FC<ModelOfListItemNotification> = ({
  theme,
  onPressed,
  name,
  lastName,
  nickName,
  playerPosition,
  createdDistance,
}) => {
  return (
    <TouchableWithoutFeedback style={styles(theme).container} onPress={onPressed}>
      <View style={styles(theme).viewIcon}>
        <IconFootball fill={theme.colors.text} />
      </View>
      <View style={styles(theme).viewData}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Texts.Title theme={theme}>{nickName}</Texts.Title>

        </View>
        <Texts.Body theme={theme} style={styles(theme).name}>{`${name} ${lastName}`}</Texts.Body>
        <Texts.Body theme={theme}>{playerPosition}</Texts.Body>
        <Texts.SubTitle theme={theme} style={styles(theme).distance}>{createdDistance}</Texts.SubTitle>

      </View>
      <View style={styles(theme).viewButton}>
        <IconArrowRight fill={theme.colors.text} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.textSecundary,
    borderBottomWidth: 0.5,
    marginBottom: theme.metrics.base,
    paddingBottom: theme.metrics.base
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewData: {
    flex: 4,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    color: theme.colors.textSecundary,
    fontFamily: 'Roboto-LightItalic',
  },
  distance: {
    color: theme.colors.textHighlight,
    marginTop: theme.metrics.base,
    fontFamily: 'Roboto-LightItalic',
  }
})
