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

export default function AppButton({title, onPress, buttonStyles, textStyles}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, buttonStyles]}
      activeOpacity={0.6}>
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
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    color: 'white',
    fontSize: getFontSize(14),
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
  },
});
