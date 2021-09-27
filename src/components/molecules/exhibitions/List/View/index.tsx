import { ModelOfTheme } from '@soccerapp/theme';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ModelOfList } from '../Models';


export const List: React.FC<ModelOfList> = ({
  data,
  horizontal = false,
  item,
  style,
  theme,
}) => {
  if (data?.length === 0) return null
  return (
    <View style={style}>
      <FlatList
        contentContainerStyle={styles(theme).container}
        data={data}
        keyExtractor={() => Math.random().toString()}
        horizontal={horizontal}
        renderItem={item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: { height: '100%', padding: theme.metrics.base }
})
