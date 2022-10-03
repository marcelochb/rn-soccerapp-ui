import React, { useImperativeHandle, useState } from "react";
import { View } from "react-native";
import { Texts } from "../../../atoms";
import { ActionSheetWrapper, Buttons, SelectButton } from "../../../molecules";
import { ModelOfActionSheetSquad } from "../Models";
import { styles } from "./styles";

export const ActionSheetSquad = React.forwardRef<any,ModelOfActionSheetSquad>(({
  theme,
onPress
},ref) => {
  const [checked, setChecked] = useState('first');
  const firstChecked = checked == 'first';
  const secondChecked = checked == 'second';
  const refActionSheetWrapper = React.useRef<any>()
  useImperativeHandle(ref,() => ({
    show: () => {refActionSheetWrapper.current.show()},
  }));

  return (
    <ActionSheetWrapper theme={theme} ref={refActionSheetWrapper}>
    <View style={styles(theme).container}>
      <Texts.Body theme={theme} style={styles(theme).title}>Selecione o time</Texts.Body>
      <SelectButton
        theme={theme}
        checked={firstChecked}
        onClick={() => setChecked('first')}
        label='Primeiro quadro'
      />
      <SelectButton
        theme={theme}
        checked={secondChecked}
        onClick={() => setChecked('second')}
        label='Segundo quadro'
      />
      <Buttons.Base theme={theme}
        style={styles(theme).button}
        label="Salvar"
        onPress={() => onPress(checked)}
        />
    </View>
    </ActionSheetWrapper>
  );
})
