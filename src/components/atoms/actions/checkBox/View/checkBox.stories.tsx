// src/components/atoms/CustomButton.stories.tsx

import { ThemeBase } from '@soccerapp/theme'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { CheckBox } from '.'
import {CenterView} from '../../../../../../storybook/stories/CenterView'

storiesOf('Atoms/CustomButton', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('confirm', () => (
    <CheckBox
      label='teste'
      isChecked={true}
      onClick={() => {}}
      theme={ThemeBase.FamiliaVsc}
    />
  ))
