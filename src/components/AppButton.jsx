import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme from '../config/theme';
import {getFontSize} from './AppText';

export default function AppButton({
  title,
  onPress,
  buttonStyles,
  textStyles,
  image,
  imageStyles,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, buttonStyles]}
      activeOpacity={0.6}>
      {image && (
        <Image
          source={image}
          style={[styles.image, imageStyles]}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.custom.green,
    height: wp(12.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    color: 'white',
    fontSize: getFontSize(14),
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
  },
  image: {
    width: wp(6),
    height: wp(6),
    right: wp(2),
  },
});
