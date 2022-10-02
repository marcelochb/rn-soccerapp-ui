import React, { useImperativeHandle, useState } from "react";
import { View } from "react-native";
import { CheckBox, Texts } from "../../../atoms";
import { ActionSheetWrapper, Buttons } from "../../../molecules";
import { ModelOfActionSheetSquad } from "../Models";
import { styles } from "./styles";

export const ActionSheetSquad = React.forwardRef<any,ModelOfActionSheetSquad>(({
  theme,
  isCheckedFirstSquad,
  isCheckedSecondSquad,
  onClickFirstSquad,
  onClickSecondSquad
},ref) => {
  const [visibled, setVisibled] = useState(false);
  const close = () => setVisibled(false);
  useImperativeHandle(ref,() => ({
    show: () => {setVisibled(true)},
  }));

  return (
    <ActionSheetWrapper theme={theme}
      visible={visibled}
      dismiss={close}
    >
    <View style={styles(theme).container}>
      <Texts.Body theme={theme} style={styles(theme).title}>Selecione o time</Texts.Body>
      <CheckBox
        theme={theme}
        isRadioButton
        isChecked={isCheckedFirstSquad}
        label="Primeiro quadro"
        styleLabel={styles(theme).label}
        style={styles(theme).content}
        onClick={onClickFirstSquad}
        />
      <CheckBox
        theme={theme}
        isRadioButton
        isChecked={isCheckedSecondSquad}
        styleLabel={styles(theme).label}
        style={styles(theme).content}
        label="Segundo quadro"
        onClick={onClickSecondSquad}
        />
      <Buttons.Base theme={theme}
        style={styles(theme).button}
        label="Salvar"
        onPress={() => {}}
        />
    </View>
    </ActionSheetWrapper>
  );
})
