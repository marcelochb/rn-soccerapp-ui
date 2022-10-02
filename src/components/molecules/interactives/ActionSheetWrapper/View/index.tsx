import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useActionSheetController } from '../Controller';
import { ModelOfActionSheetWrapper } from '../Models';
import {styles} from './styles';

const AnimatedView = Animated.createAnimatedComponent(View);


export const ActionSheetWrapper = React.forwardRef<any,ModelOfActionSheetWrapper>(({
  theme,
  children,
},ref) => {
  const {getController, handleController} = useActionSheetController();
  React.useImperativeHandle(ref,() => ({
    show: () => {handleController.show()},
  }));

  return (

    <Modal transparent visible={getController.visible} onRequestClose={handleController.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles(theme).keyboard}
      >
        <View style={styles(theme).wrapper}>
          <TouchableOpacity
            style={styles(theme).background}
            activeOpacity={1}
            onPress={handleController.dismiss}
          />
          <AnimatedView
            {...getController.panResponder.panHandlers}
            style={[getController.panStyle, styles(theme).container, { transform: [{ translateY: getController.animatedTop }] }]}
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
})
