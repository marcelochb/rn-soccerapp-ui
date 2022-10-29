import { ModelOfTheme } from '@soccerapp/theme';
import React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';
import { Texts } from '../../../../atoms';
import { ModelOfListGrouped } from '../Models';


export const ListGrouped: React.FC<ModelOfListGrouped> = ({
  data,
  horizontal = false,
  item,
  style,
  theme,
  header,
  emptyList
}) => {
  if (data.length == 0) return <>{emptyList}</>
  return (
    <View style={[styles(theme).container, style]}>
      <SectionList
        sections={data}
        renderSectionHeader={header}
        stickySectionHeadersEnabled={false}
        keyExtractor={() => Math.random().toString()}
        horizontal={horizontal}
        renderItem={item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: { padding: theme.metrics.base, flex: 1 }
})
