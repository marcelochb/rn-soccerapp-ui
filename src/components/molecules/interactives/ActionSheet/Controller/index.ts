import { useEffect, useState } from "react";
import { Animated, PanResponder } from "react-native";


export const useActionSheetController = (
  pan: Animated.ValueXY,
  animatedTop:Animated.Value,
  deviceHeight: number | Animated.ValueXY | Animated.Value | { x: number; y: number; } | Animated.AnimatedInterpolation,
  visible: boolean = false,
  dismiss: () => void,
  ) => {
  const [boxHeight, setBoxHeight] = useState(0);
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }])(e, gestureState);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const gestureLimitArea = boxHeight / 3;
        const gestureDistance = gestureState.dy;
        if (gestureDistance > gestureLimitArea) {
          dismiss();
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
        }
      }
    })
  );

  const createPanResponder = () => setPanResponder(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0) {
        Animated.event([null, { dy: pan.y }])(e, gestureState);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      const gestureLimitArea = boxHeight / 3;
      const gestureDistance = gestureState.dy;
      if (gestureDistance > gestureLimitArea) {
        dismiss();
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
      }
    }
  }))

  useEffect(
    () => {
      if (visible) {
        console.log('entrei');
        Animated.timing(animatedTop, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }).start();
      } else {
        Animated.timing(animatedTop, {
          toValue: deviceHeight,
          duration: 300,
          useNativeDriver: true
        }).start(() => {
          pan.setValue({ x: 0, y: 0 });
        })
      }
    },[visible]
  )
    return {
      getController: {
        panResponder
      },
      handleController: {
        setBoxHeight,
        createPanResponder,
      }
    }

}
