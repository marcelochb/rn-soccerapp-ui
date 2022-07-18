import { useState } from "react";
import { Animated, PanResponder } from "react-native";


export const useActionSheetController = (pan: Animated.ValueXY, animatedTop:Animated.Value, deviceHeight: number | Animated.ValueXY | Animated.Value | { x: number; y: number; } | Animated.AnimatedInterpolation) => {
  const [visible, setVisible] = useState(false);
  const [boxHeight, setBoxHeight] = useState(0);
  const close = () => setVisible(false);
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
          setVisible(false);
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
        setVisible(false);
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
      }
    }
  }))
  const setModalVisibleCustom = (visible: boolean) => {
    if (visible) {
      setVisible(visible)
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
        setVisible(visible)
      });
    }
  }

    const panStyle = {
      transform: pan.getTranslateTransform()
    };

    return {
      getController: {
        visible,
        panResponder
      },
      handleController: {
        close,
        setBoxHeight,
        createPanResponder,
      }
    }

}
