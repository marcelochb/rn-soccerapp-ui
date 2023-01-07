import React from 'react';
import { View } from 'react-native';
import { ModelOfListItemTeam } from '../Models';
import { Avatar, Texts } from '../../../../atoms';
import { Buttons } from '../../Buttons/View';
import { styles } from './styles';
import IconArrowRight from '../../../../../assets/Icons/iconArrowRight.svg'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export const ListItemTeam: React.FC<ModelOfListItemTeam> = ({
  theme,
  avatarSource,
  name,
  responsable,
  isSelectable = true,
  labelEdit,
  phone,
  selectOnPressed,
  editOnPressed,
  style
}) => {
  return (
    <View style={[styles(theme).container,style]}>
      <View style={styles(theme).viewLeft}>
        <Buttons.Link theme={theme}
          label={labelEdit}
          styleLabel={styles(theme).labelEdit}
          styleContent={styles(theme).buttonEditContent}
          onPress={editOnPressed}
          style={styles(theme).viewButtonEdit}
          />
      </View>
      <TouchableWithoutFeedback onPress={selectOnPressed}
        containerStyle={styles(theme).viewSelectContent}
        style={styles(theme).viewSelect}
        >
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
            {isSelectable && <IconArrowRight fill={theme.colors.textSecundary}/>}
          </View>
      </TouchableWithoutFeedback>
    </View>
  );
}


