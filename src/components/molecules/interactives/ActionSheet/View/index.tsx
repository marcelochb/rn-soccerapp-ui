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
import styles from './styles';
const deviceHeight = Dimensions.get('screen').height;

const AnimatedView = Animated.createAnimatedComponent(View);


export const ActionSheet: React.FC<ModelOfActionSheet> = ({ theme, children}) => {
  const [animatedTop] = useState(new Animated.Value(deviceHeight));
  const [pan] = useState(new Animated.ValueXY());
  const {getController, handleController} = useActionSheetController(pan,animatedTop,deviceHeight)
  const panStyle = {
    transform: pan.getTranslateTransform()
  };
  return (
    <Modal transparent visible={getController.visible} onRequestClose={() => handleController.close()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles(theme).keyboard}
      >
        <View style={styles(theme).wrapper}>
          <TouchableOpacity
            style={styles(theme).background}
            activeOpacity={1}
            onPress={() => handleController.close()}
            testID="closable-empty-area"
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
