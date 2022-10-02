import { useEffect, useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";


export const useActionSheetController = () => {
  const deviceHeight = Dimensions.get('screen').height;
  const [boxHeight, setBoxHeight] = useState(0);
  const [animatedTop] = useState(new Animated.Value(300));
  const [visible, setVisible] = useState(false);
  const [pan,setPan] = useState(new Animated.ValueXY());
  const panStyle = {
    transform: pan.getTranslateTransform()
  };
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
  const show = () => setVisible(true);
  const dismiss = () => setVisible(false);
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
        })
      }
    },[visible]
  )
  return {
    getController: {
      panResponder,
      visible,
      panStyle,
      animatedTop,
    },
    handleController: {
      setBoxHeight,
      createPanResponder,
      dismiss,
      show
    }
  }

}
