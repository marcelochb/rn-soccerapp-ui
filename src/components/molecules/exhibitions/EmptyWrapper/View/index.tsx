import React from 'react';
import { Dimensions, View } from 'react-native';
import { Texts } from '../../../../atoms';
import { ModelOfEmptyWrapper } from '../Models';

import { styles } from './styles';
export const EmptyWrapper: React.FC<ModelOfEmptyWrapper> = ({
  theme,
  IconSVG,
  title,
  subTitle
}) => {
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).svg}>
        <IconSVG
          fill={theme.colors.elements}
          width="100%"
          height="100%"
        />
      </View>
      <View style={styles(theme).text}>
        <Texts.Title theme={theme}>{title}</Texts.Title>
        <Texts.SubTitle theme={theme}>{subTitle}</Texts.SubTitle>
      </View>
    </View>
  );
}
