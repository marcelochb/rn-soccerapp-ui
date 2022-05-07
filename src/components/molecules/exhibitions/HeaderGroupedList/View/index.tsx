import React from 'react';
import { Texts } from '../../../../atoms';
import { ModelOfHeaderGroupedList } from '../Models';
import { styles } from './styles';

export const HeaderGroupedList: React.FC<ModelOfHeaderGroupedList> = ({
  themme,
  yearMonth
}) => {
  return (
    <Texts.Title
    theme={themme}
    style={styles(themme).yearMonth}
  >
    {yearMonth}
  </Texts.Title>
  );
}
