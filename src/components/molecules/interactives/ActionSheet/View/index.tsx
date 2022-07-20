import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useActionSheetController } from '../Controller';
import { ModelOfActionSheet } from '../Models';
import {styles} from './styles';
const deviceHeight = Dimensions.get('screen').height;

const AnimatedView = Animated.createAnimatedComponent(View);


export const ActionSheet: React.FC<ModelOfActionSheet> = ({
  theme,
  children,
  visible,
  dismiss
}) => {
  const [animatedTop] = useState(new Animated.Value(300));
  const [pan] = useState(new Animated.ValueXY());
  const {getController, handleController} = useActionSheetController(pan,animatedTop,deviceHeight,visible, dismiss);
  const panStyle = {
    transform: pan.getTranslateTransform()
  };
  return (

    <Modal transparent visible={getController.visibleLocal} onRequestClose={() => dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles(theme).keyboard}
      >
        <View style={styles(theme).wrapper}>
          <TouchableOpacity
            style={styles(theme).background}
            activeOpacity={1}
            onPress={() => dismiss()}
          />
          <AnimatedView
            {...getController.panResponder.panHandlers}
            style={[panStyle, styles(theme).container, { transform: [{ translateY: animatedTop }] }]}
            onLayout={({
              nativeEvent: {
                layout: { height }
              }
            }) => {
              handleController.setBoxHeight(height);
              handleController.createPanResponder();
            }}
          >
            <View style={styles(theme).draggableContainer}>
              <View style={styles(theme).draggableIcon} />
            </View>
            {children}
          </AnimatedView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
