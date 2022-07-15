import React from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import { ModelOfPageWapper } from '../Models';
import { ModelOfTheme } from '@soccerapp/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBarPageWrapper, StatusBarPage } from '../../../../atoms';
// import { SafeAreaView } from 'react-native-safe-area-context';


export const PageWrapper: React.FC<ModelOfPageWapper> = ({
  children,
  isStatusBarLight = false,
  isScrollForm = false,
  isScrollList = false,
  noHorizontalPadding = false,
  Header,
  ButtonFixed,
  loading = false,
  theme
}) => {
  if (loading) {
    return (
      <>
        <StatusBarPageWrapper theme={theme} isStatusBarLight={isStatusBarLight} />
        <View style={[styles(theme).container, styles(theme).loading]}>
          <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
          <ActivityIndicator />
        </View>
      </>
    );
  }
  if (isScrollForm) return (
    <>
      <StatusBarPageWrapper theme={theme} isStatusBarLight={isStatusBarLight} />
      <View style={styles(theme).container}>
        <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
        {Header && <View style={styles(theme).header}>{Header}</View>}
        <KeyboardAwareScrollView style={styles(theme).scrollView}
          contentContainerStyle={[styles(theme).container, styles(theme).paddingH]}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </KeyboardAwareScrollView>
        {ButtonFixed && ButtonFixed}
      </View>
    </>
  )

  if (isScrollList) return (
    <>
      <StatusBarPageWrapper theme={theme} isStatusBarLight={isStatusBarLight} />
      <SafeAreaView style={styles(theme).container}>
        <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
        {Header && <View style={styles(theme).header}>{Header}</View>}
        <ScrollView
          style={[styles(theme).scrollView, styles(theme).paddingH]}
          keyboardShouldPersistTaps="handled"
        >
          <SafeAreaView>

            {children}
          </SafeAreaView>
        </ScrollView>
        {ButtonFixed && ButtonFixed}
      </SafeAreaView>
    </>

  )
  return (
    <>
      <StatusBarPageWrapper theme={theme} isStatusBarLight={isStatusBarLight} />
      <SafeAreaView style={styles(theme).container}>
        <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
        {Header && <View style={styles(theme).header}>{Header}</View>}
        <View style={[styles(theme).content, styles(theme).paddingV, noHorizontalPadding ? {} : styles(theme).paddingH]}>
          {children}
        </View>
        {ButtonFixed && ButtonFixed}
      </SafeAreaView>
    </>
  )

}

const styles = (theme: ModelOfTheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    content: {
      flex: 1,
    },
    paddingH: { paddingHorizontal: metrics.base },
    paddingV: { paddingVertical: metrics.base },
    header: {
      width: '100%',
      backgroundColor: colors.elements,
      borderBottomStartRadius: metrics.radiusLargest,
      borderBottomEndRadius: metrics.radiusLargest,
      padding: metrics.base
    },
    scrollView: { backgroundColor: colors.background, flex: 1 },
    loading: { justifyContent: 'center', alignItems: 'center' }
  });
}
