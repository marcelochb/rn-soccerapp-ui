import { Animated, Easing, TextInputFocusEventData, Platform } from "react-native";
import { ModelOfInputMoveLabel } from "../Models";
import { useState } from "react";

export const useInputAnimateService = () => {
  const [valueXY] = useState({x:0,y: Platform.OS === 'android'
  ? 40
  : 20})
  const animateLabel = new Animated.ValueXY(valueXY);

  const moveLabel = (toValue:ModelOfInputMoveLabel) => {
    Animated.timing(animateLabel,
      {
        toValue,
        easing: Easing.ease,
        useNativeDriver: false
      }).start()
  }

  const moveLabelUp = () => {
   moveLabel({x:0,y:0});
  }

  const moveLabelDown = (nativeEvent: TextInputFocusEventData) => {
    if (!nativeEvent.text) {
     moveLabel(valueXY)
    }
  }

  return {animateLabel,moveLabelUp,moveLabelDown}
}
