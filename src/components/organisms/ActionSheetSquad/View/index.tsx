import React from "react";
import { View } from "react-native";
import { CheckBox, Texts } from "../../../atoms";
import { ActionSheetWrapper, Buttons } from "../../../molecules";
import { ModelOfActionSheetSquad } from "../Models";
import { styles } from "./styles";

export const ActionSheetSquad: React.FC<ModelOfActionSheetSquad> = ({
  theme,
  dismiss,
  visible,
  isCheckedFirstSquad,
  isCheckedSecondSquad,
  onClickFirstSquad,
  onClickSecondSquad
}) => {
  return (
    <ActionSheetWrapper theme={theme}
      visible={visible}
      dismiss={dismiss}
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
}
