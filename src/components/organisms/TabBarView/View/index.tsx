import React from 'react';
import { Dimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ModelOfTabBar, ModelOfTabBarView } from '../Models';
import { Badge, Texts } from '../../../../components/atoms';
import { styles } from './styles';

const initialLayout = { width: Dimensions.get('window').width };

export const TabBarView: React.FC<ModelOfTabBarView> = ({
  FirstTab,
  FirstTabBadge,
  SecondTab,
  SecondTabBadge,
  theme
}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Primeiro quadro' },
    { key: 'second', title: 'Segundo quadro' },
  ]);


  const RenderTabBar = (props: ModelOfTabBar) => (
    <TabBar
      {...props}
      indicatorStyle={styles(theme).tabIndicator}
      indicatorContainerStyle={styles(theme).tabIndicatorContainer}
      style={[styles(theme).tab]}
      renderLabel={({ route, focused, color, }) => (
        <>
          <Texts.Body theme={theme} isTextElement={focused} style={[styles(theme).tabLabel]}>
            {route.title}
          </Texts.Body>
          <Badge theme={theme} value={route.key === 'first' ? FirstTabBadge : SecondTabBadge} />
        </>
      )}
    />
  )

  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
  });



  return (
    <View style={styles(theme).container}>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={props => <RenderTabBar {...props} />}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        swipeEnabled={false}
      />
    </View>
  );
}


