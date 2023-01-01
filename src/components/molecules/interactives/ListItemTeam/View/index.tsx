import React from 'react';
import { View } from 'react-native';
import { ModelOfListItemTeam } from '../Models';
import { Avatar, Texts } from '../../../../atoms';
import { Buttons } from '../../Buttons/View';
import { styles } from './styles';


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
      <View style={styles(theme).content}>
        <View style={styles(theme).viewLeft}>
          <Avatar theme={theme} source={avatarSource} small />
        </View>
        <View style={styles(theme).viewRight}>
          <Texts.Title theme={theme} small>{name}</Texts.Title>
          <Texts.Body theme={theme} style={styles(theme).name}>{`${responsable} - ${phone}`}</Texts.Body>
        </View>
      </View>
      <View style={styles(theme).viewBottom}>
        <Buttons.Link theme={theme}
          label='Editar'
          styleLabel={styles(theme).edit}
          styleContent={{flex: 1}}
          onPress={editOnPressed}
          style={styles(theme).viewButton}
          />
        <Buttons.Link theme={theme}
          label='Selecionar'
          styleContent={{flex: 1}}
          styleLabel={styles(theme).select}
          onPress={selectOnPressed}
          style={styles(theme).viewButton}
        />
      </View>
    </View>
  );
}


