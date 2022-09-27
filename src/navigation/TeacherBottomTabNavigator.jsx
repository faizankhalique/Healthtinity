import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {getFontSize, Label10} from '../components/AppText';
import theme from '../config/theme';

import CustomTab from './CustomeTab';
import HomeScreen from '../screens/Home/HomeScreen';
import ClassesScreen from '../screens/Classes/Teacher/TeacherClassesScreen';
import PackageScreen from '../screens/Package/PackageScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import MerchandiseScreen from '../screens/Merchandise/MerchandiseScreen';

const Tab = createBottomTabNavigator();
const getIconStyles = focused => {
  return {
    color: focused ? theme.custom.orange : theme.custom.medium_grey,
    fontSize: getFontSize(22),
  };
};
const TabTitle = ({title, isFocused}) => (
  <Label10
    style={{
      color: isFocused ? theme.custom.light_green : theme.custom.medium_grey,
    }}>
    {title}
  </Label10>
);

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: wp(19.5),
        justifyContent: 'space-around',
        paddingHorizontal: wp(2),
        // paddingVertical:wp(4),
        // alignItems: 'center',

        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        backgroundColor: theme.brand.primary,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}>
            {route.name === 'Package' ? (
              <CustomTab
                isFocused={isFocused}
                image={require('../assets/package.png')}
                activeImage={require('../assets/packageActive.png')}
                title="Package"
              />
            ) : null}
            {route.name === 'Classes' ? (
              <CustomTab
                isFocused={isFocused}
                image={require('../assets/class.png')}
                activeImage={require('../assets/classActive.png')}
                title="Classes"
              />
            ) : null}
            {route.name === 'Home' ? (
              <CustomTab
                isFocused={isFocused}
                image={require('../assets/home.png')}
                activeImage={require('../assets/homeActive.png')}
                title="Home"
              />
            ) : null}
            {route.name === 'Merchandise' ? (
              <CustomTab
                isFocused={isFocused}
                image={require('../assets/merchandise.png')}
                activeImage={require('../assets/merchandiseActive.png')}
                title="Merchandise"
              />
            ) : null}
            {route.name === 'Profile' ? (
              <CustomTab
                isFocused={isFocused}
                image={require('../assets/profile.png')}
                activeImage={require('../assets/profileActive.png')}
                title="My profile"
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TeacherBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Package" component={PackageScreen} />
      <Tab.Screen name="Classes" component={ClassesScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Merchandise" component={MerchandiseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TeacherBottomTabNavigator;
