import {
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import AppIntroSlider from 'react-native-app-intro-slider';

import {Body17, Label11Light} from '../../components/AppText';
import theme from '../../config/theme';
import AppTextInput from '../../components/AppTextInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const items = [
  {
    key: 1,
    image: require('../../assets/DSC_1.png'),
  },
  {
    key: 2,
    image: require('../../assets/DSC_2.png'),
  },
  {
    key: 3,
    image: require('../../assets/DSC_3.png'),
  },
  {
    key: 4,
    image: require('../../assets/DSC_4.png'),
  },
];
const slides = [
  {
    key: 1,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    image: require('../../assets/DSC.png'),
  },
  {
    key: 2,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    image: require('../../assets/DSC_1.png'),
  },
  {
    key: 3,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    image: require('../../assets/DSC_2.png'),
  },
  {
    key: 4,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    image: require('../../assets/DSC_3.png'),
  },
];
const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: theme.brand.primary,
        marginBottom: wp(1),
        height: wp(0.5),
        width: props.navigationState.index === 2 ? wp(20) : wp(17),
      }}
      style={{
        backgroundColor: 'transparent',
        height: wp(6),
        width: '100%',
      }}
      renderTabBarItem={({route, focused, color}) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              height: wp('100%'),
            }}
            key={route.key}
            onPress={() => props.jumpTo(route.key)}>
            <Label11Light
              style={{
                color: theme.custom.green,
              }}>
              {route.title}
            </Label11Light>
          </TouchableOpacity>
        );
      }}
    />
  );
};
const ListItem = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(48, 139, 133, 0.15)',

        marginBottom: wp(2),
      }}>
      <Image
        source={item.image}
        // resizeMode="contain"
        style={{height: wp(28), width: wp('50%')}}
      />
    </View>
  );
};
const FirstRoute = () => (
  <View style={{flex: 1}}>
    <FlatList
      style={{flex: 1}}
      data={items}
      renderItem={ListItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1}}>
    <FlatList
      style={{flex: 1}}
      data={items}
      renderItem={ListItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
const ThirdRoute = () => (
  <View style={{flex: 1}}>
    <FlatList
      style={{flex: 1}}
      data={items}
      renderItem={ListItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
const _renderItem = ({item}) => {
  return (
    <Image
      style={{height: '100%', width: '100%'}}
      source={item.image}
      resizeMode="contain"
    />
  );
};

export default function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [value, setValue] = useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Latest Post'},
    {key: 'second', title: 'Health Tips'},
    {key: 'third', title: 'Featured Post'},
  ]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.topRow,
          {marginTop: Platform.OS == 'ios' ? statusBarHeight + wp(2) : wp(4)},
        ]}>
        <Body17 style={{color: theme.brand.primary}}>Hi Trinity !</Body17>
        <TouchableOpacity onPress={() => navigation.navigate('ChatRoom', null)}>
          <Image
            source={require('../../assets/chat-icon.png')}
            resizeMode="contain"
            style={{height: wp(8), width: wp(8)}}
          />
        </TouchableOpacity>
      </View>
      <AppTextInput
        textInputContainerStyle={{
          backgroundColor:
            Platform.OS === 'ios'
              ? 'rgba(224, 238, 237, 0.8)'
              : 'rgba(224, 238, 237, 1)',
        }}
        isSearch={true}
        value={value}
        onChangeText={v => setValue(v)}
      />
      <View
        style={{
          width: '100%',
          height: wp(55),
          marginBottom: wp(1),
        }}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={{
            borderWidth: wp(0.3),
            borderColor: theme.custom.green,
            width: wp(3),
            height: wp(3),
            borderRadius: wp(3 / 2),
            bottom: wp(-7),
          }}
          activeDotStyle={{
            backgroundColor: theme.custom.green,
            width: wp(3),
            height: wp(3),
            bottom: wp(-7),
            borderRadius: wp(3 / 2),
          }}
        />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: wp('100%')}}
        tabStyle={{backgroundColor: 'red'}}
        lazy
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
