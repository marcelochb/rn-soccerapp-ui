import { ModelOfTheme } from '@soccerapp/theme';
import React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';
import { ModelOfListGrouped } from '../Models';


export const ListGrouped: React.FC<ModelOfListGrouped> = ({
  data,
  horizontal = false,
  item,
  style,
  theme,
  header
}) => {
  if (data?.length === 0) return null
  return (
    <View style={style}>
      <SectionList
        contentContainerStyle={styles(theme).container}
        sections={data}
        renderSectionHeader={header}
        keyExtractor={() => Math.random().toString()}
        horizontal={horizontal}
        renderItem={item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: { padding: theme.metrics.base }
})
