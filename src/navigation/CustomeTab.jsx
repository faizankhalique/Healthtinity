import {Image, View, Text} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getFontSize} from '../components/AppText';
import theme from '../config/theme';

export default function CustomTab({
  isFocused,
  activeImage,
  image,
  activeStyles,
  styles,
  title,
}) {
  return (
    <View
      style={{
        width: wp(18),
        height: wp(18),
        // paddingTop: wp(0.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(18 / 2),
        backgroundColor: isFocused ? theme.custom.white : theme.custom.green,
      }}>
      {isFocused ? (
        <Image
          source={activeImage}
          style={[{height: wp(6), width: wp(6)}, activeStyles]}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={image}
          style={[{height: wp(6), width: wp(6)}, styles]}
          resizeMode="contain"
        />
      )}
      <Text
        style={{
          fontSize:
            title == 'Merchandise' && isFocused
              ? getFontSize(8)
              : getFontSize(9),
          fontFamily: 'Rubik-Regular',
          marginTop: wp(1),
          color: isFocused ? theme.custom.green : theme.custom.white,
        }}>
        {title}
      </Text>
    </View>
  );
}
