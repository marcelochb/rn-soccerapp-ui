import React from 'react';
import { View } from 'react-native';
import { Texts } from '../../../atoms/exhibitions';
import { Buttons, PageWrapper } from '../../../molecules';
import { ModelOfAwaitingApproval } from '../Models';


export const AwaitingApproval: React.FC<ModelOfAwaitingApproval> = ({
  theme,
  title,
  bodyText,
  onPressed,
  labelButton,
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>

          <Texts.Title theme={theme}>{title}</Texts.Title>
          <Texts.Body theme={theme}>{bodyText}</Texts.Body>
        </View>
        <View>

          <Buttons.Base theme={theme}
            label={labelButton}
            onPress={onPressed}
            style={{ marginBottom: theme.metrics.largest }}
          />
        </View>
      </View>
    </PageWrapper>
  );
}
