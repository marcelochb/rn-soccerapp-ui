import React from "react";
import { View } from "react-native";
import { CheckBox } from "../../../../atoms";
import { ModelOfActionSheetSquad } from "../Models";
import { styles } from "./styles";

export const ActionSheetSquad: React.FC<ModelOfActionSheetSquad> = ({
  theme
}) => {
  return (
    <View style={styles(theme).container}>
      <CheckBox
        theme={theme}
        isRadioButton
        isChecked
        label="Primeiro quadro"
        onClick={() => {}}
      />
      <CheckBox
        theme={theme}
        isRadioButton
        isChecked={false}
        label="Segundo quadro"
        onClick={() => {}}
      />
    </View>
  );
}
