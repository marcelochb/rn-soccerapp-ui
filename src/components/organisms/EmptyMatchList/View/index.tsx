import React from 'react';
import { EmptyWrapper } from '../../../molecules';
import { ModelOfEmptyMatchList } from '../Models';
import IconSoccerField from '../../../../assets/Icons/iconSoccerField.svg';

export const EmptyMatchList: React.FC<ModelOfEmptyMatchList> = ({
  theme
}) => {
  return (
    <EmptyWrapper
      theme={theme}
      IconSVG={IconSoccerField}
      title={'Ops, ainda nada por aqui!'}
      subTitle={'Agende novos jogos para aparecerem aqui...'}
    />
  );
}
