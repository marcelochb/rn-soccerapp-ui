import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { ModelOfListItemTeam } from '../Models';
import { Avatar, Texts } from '../../../../atoms';
import { Buttons } from '../../Buttons/View';
import { styles } from './styles';
import IconArrowRight from '../../../../../assets/Icons/iconArrowRight.svg'


export const ListItemTeam: React.FC<ModelOfListItemTeam> = ({
  theme,
  avatarSource,
  name,
  responsable,
  phone,
  selectOnPressed,
  editOnPressed,
}) => {
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).viewLeft}>
        <Buttons.Link theme={theme}
          label='Editar'
          styleLabel={styles(theme).edit}
          styleContent={{flex: 1}}
          onPress={editOnPressed}
          style={styles(theme).viewButtonEdit}
          />
      </View>
      <TouchableWithoutFeedback onPress={selectOnPressed}>
        <>
          <View style={styles(theme).viewCenter}>
            <View style={styles(theme).viewCenterLeft}>
              <Avatar theme={theme} source={avatarSource} small />
            </View>
            <View style={styles(theme).viewCenterRight}>
              <Texts.Title theme={theme} small>{name}</Texts.Title>
              <Texts.Body theme={theme} style={styles(theme).name}>{`${responsable} - ${phone}`}</Texts.Body>
            </View>
          </View>
          <View style={styles(theme).viewRight}>
            <IconArrowRight fill={theme.colors.textSecundary}/>
          </View>
        </>
      </TouchableWithoutFeedback>
    </View>
  );
}


