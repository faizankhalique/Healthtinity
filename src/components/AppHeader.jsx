import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../config/theme';
import {Body22, Label16} from './AppText';
import NavigationService from '../navigation/NavigationService';

export default function AppHeader({
  title,
  containerStyles,
  titleStyles,
  isWhite,
  iconStyles,
}) {
  return (
    <>
      <View style={[styles.container, {...containerStyles}]}>
        <TouchableOpacity
          onPress={() => NavigationService.goBack()}
          style={{
            height: wp(8),
            width: wp(8),
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          {isWhite ? (
            <Image
              source={require('../assets/chevron-right-white.png')}
              resizeMode="contain"
              style={[{height: wp(6), width: wp(6)}, {...iconStyles}]}
            />
          ) : (
            <Image
              source={require('../assets/chevron-right.png')}
              resizeMode="contain"
              style={[{height: wp(6), width: wp(6)}, {...iconStyles}]}
            />
          )}
        </TouchableOpacity>
        <Body22
          style={[
            {color: isWhite ? 'white' : theme.brand.primary, left: wp(4)},
            {...titleStyles},
          ]}>
          {title}
        </Body22>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // paddingTop: wp(8),
    // paddingBottom: wp(4),
    // backgroundColor: theme.custom.green,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    // paddingHorizontal: wp(4),
  },
});
