import { ModelOfTheme } from '@soccerapp/theme';
import { StyleSheet } from 'react-native';

export const styles = (theme: ModelOfTheme) => {
  const {colors, metrics} = theme;
   return StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  keyboard: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    backgroundColor: colors.elements,
    width: '100%',
    overflow: 'hidden',
    borderTopRightRadius: metrics.radiusLarge,
    borderTopLeftRadius: metrics.radiusLarge
  },
  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  draggableIcon: {
    width: 40,
    height: 6,
    borderRadius: 3,
    margin: 10,
    marginBottom: 0,
    backgroundColor: colors.textElements
  }
});
}

