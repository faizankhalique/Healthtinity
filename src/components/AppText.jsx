import React from 'react';
import {Platform, StyleSheet, Text, TextProps} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import theme from '../config/theme';

// HEADINGS

export function Heading1(props) {
  return <Text {...props} style={[textStyles.heading1, props.style]} />;
}

export function Heading2(props) {
  return <Text {...props} style={[textStyles.heading2, props.style]} />;
}

export function Heading3(props) {
  return <Text {...props} style={[textStyles.heading3, props.style]} />;
}

export function Heading4(props) {
  return <Text {...props} style={[textStyles.heading4, props.style]} />;
}

export function Heading5(props) {
  return <Text {...props} style={[textStyles.heading5, props.style]} />;
}
export function Heading6(props) {
  return <Text {...props} style={[textStyles.heading6, props.style]} />;
}
// BODY
export function Body22(props) {
  return <Text {...props} style={[textStyles.body22, props.style]} />;
}
export function Body21(props) {
  return <Text {...props} style={[textStyles.body21, props.style]} />;
}
export function Body20(props) {
  return <Text {...props} style={[textStyles.body20, props.style]} />;
}

export function Body20Bold(props) {
  return <Text {...props} style={[textStyles.body20Bold, props.style]} />;
}
export function Body19(props) {
  return <Text {...props} style={[textStyles.body19, props.style]} />;
}

export function Body19Bold(props) {
  return <Text {...props} style={[textStyles.body19Bold, props.style]} />;
}
export function Body17(props) {
  return <Text {...props} style={[textStyles.body17, props.style]} />;
}

export function Body17Bold(props) {
  return <Text {...props} style={[textStyles.body17Bold, props.style]} />;
}
export function Body16(props) {
  return <Text {...props} style={[textStyles.body17, props.style]} />;
}

export function Body16Bold(props) {
  return <Text {...props} style={[textStyles.body16Bold, props.style]} />;
}
export function Body15(props) {
  return <Text {...props} style={[textStyles.body15, props.style]} />;
}

export function Body15Bold(props) {
  return <Text {...props} style={[textStyles.body15Bold, props.style]} />;
}
export function Body14(props) {
  return <Text {...props} style={[textStyles.body14, props.style]} />;
}
export function Body13(props) {
  return <Text {...props} style={[textStyles.body13, props.style]} />;
}
export function Body12(props) {
  return <Text {...props} style={[textStyles.body12, props.style]} />;
}
export function Body11(props) {
  return <Text {...props} style={[textStyles.body11, props.style]} />;
}

// LABEL

export function Label32(props) {
  return <Text {...props} style={[textStyles.label32, props.style]} />;
}
export function Label22(props) {
  return <Text {...props} style={[textStyles.label22, props.style]} />;
}
export function Label22Light(props) {
  return <Text {...props} style={[textStyles.label22Light, props.style]} />;
}
export function Label20(props) {
  return <Text {...props} style={[textStyles.label20, props.style]} />;
}
export function Label19(props) {
  return <Text {...props} style={[textStyles.label19, props.style]} />;
}
export function Label17(props) {
  return <Text {...props} style={[textStyles.label17, props.style]} />;
}
export function Label17Light(props) {
  return <Text {...props} style={[textStyles.label17Light, props.style]} />;
}
export function Label16(props) {
  return <Text {...props} style={[textStyles.label16, props.style]} />;
}
export function Label16Light(props) {
  return <Text {...props} style={[textStyles.label16Light, props.style]} />;
}
export function Label15(props) {
  return <Text {...props} style={[textStyles.label15, props.style]} />;
}
export function Label15Light(props) {
  return <Text {...props} style={[textStyles.label15Light, props.style]} />;
}
export function Label14(props) {
  return <Text {...props} style={[textStyles.label14, props.style]} />;
}
export function Label14Light(props) {
  return <Text {...props} style={[textStyles.label14Light, props.style]} />;
}
export function Label13(props) {
  return <Text {...props} style={[textStyles.label12, props.style]} />;
}
export function Label13Light(props) {
  return <Text {...props} style={[textStyles.label13Light, props.style]} />;
}
export function Label12(props) {
  return <Text {...props} style={[textStyles.label12, props.style]} />;
}
export function Label12Light(props) {
  return <Text {...props} style={[textStyles.label13Light, props.style]} />;
}
export function Label11(props) {
  return <Text {...props} style={[textStyles.label11, props.style]} />;
}
export function Label11Light(props) {
  return <Text {...props} style={[textStyles.label11Light, props.style]} />;
}
export function Label10(props) {
  return <Text {...props} style={[textStyles.label10, props.style]} />;
}
export function Label10Light(props) {
  return <Text {...props} style={[textStyles.label10, props.style]} />;
}
export function Label9(props) {
  return <Text {...props} style={[textStyles.label9, props.style]} />;
}
export function Label9Light(props) {
  return <Text {...props} style={[textStyles.label9, props.style]} />;
}
export function Label8(props) {
  return <Text {...props} style={[textStyles.label8, props.style]} />;
}
export function Label8Light(props) {
  return <Text {...props} style={[textStyles.label8, props.style]} />;
}
export function Label(props) {
  return <Text {...props} style={[textStyles.label, props.style]} />;
}

export function NumberText(props) {
  return <Text {...props} style={[textStyles.numbers, props.style]} />;
}
{
  /* <Text style={{fontFamily:"Rubik-Light"}}>Light!</Text>
<Text style={{fontFamily:"Rubik-Regular"}}>Regular!</Text>
<Text style={{fontFamily:"Rubik-Medium"}}>Medium!</Text>
<Text style={{fontFamily:"Rubik-Bold"}}>Bold!</Text>
<Text style={{fontFamily:"Rubik-ExtraBold"}}>ExtraBold!</Text>
<Text style={{fontFamily:"Rubik-SemiBold"}}>SemiBold!</Text> */
}
export const getFontSize = fontSize => RFValue(fontSize);
export const textStyles = StyleSheet.create({
  heading1: {
    fontSize: getFontSize(34),
    color: theme.text.heading,
    fontFamily: 'Rubik-Bold',
  },
  heading2: {
    fontSize: getFontSize(28),
    color: theme.text.heading,
    fontFamily: 'Rubik-Bold',
  },
  heading3: {
    fontSize: getFontSize(24),
    color: theme.text.heading,
    fontFamily: 'Rubik-Bold',
  },
  heading4: {
    fontSize: getFontSize(20),
    color: theme.text.heading,
    fontFamily: 'Rubik-Bold',
  },
  heading5: {
    fontSize: getFontSize(16),
    color: theme.text.heading,
    fontFamily: 'Rubik-Bold',
  },
  heading6: {
    fontSize: getFontSize(14),
    color: theme.text.heading,
    fontFamily: 'Rubik-Bold',
  },
  body22: {
    fontSize: getFontSize(22),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body21: {
    fontSize: getFontSize(21),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body20: {
    fontSize: getFontSize(20),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body20Bold: {
    fontSize: getFontSize(20),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-SemiBold',
  },
  body19: {
    fontSize: getFontSize(19),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body19Bold: {
    fontSize: getFontSize(19),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-SemiBold',
  },
  body16: {
    fontSize: getFontSize(16),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body16Bold: {
    fontSize: getFontSize(16),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-SemiBold',
  },
  body17: {
    fontSize: getFontSize(17),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body17Bold: {
    fontSize: getFontSize(17),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-SemiBold',
  },
  body15: {
    fontSize: getFontSize(15),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body15Bold: {
    fontSize: getFontSize(15),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-SemiBold',
  },
  body14: {
    fontSize: getFontSize(14),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body13: {
    fontSize: getFontSize(13),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body12: {
    fontSize: getFontSize(12),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  body11: {
    fontSize: getFontSize(11),
    color: theme.text.primaryBody,
    fontFamily: 'Rubik-Regular',
  },
  label50: {
    fontSize: getFontSize(50),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label32: {
    fontSize: getFontSize(32),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label20: {
    fontSize: getFontSize(20),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label22: {
    fontSize: getFontSize(22),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label22Light: {
    fontSize: getFontSize(22),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label19: {
    fontSize: getFontSize(19),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label17: {
    fontSize: getFontSize(17),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label17Light: {
    fontSize: getFontSize(17),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label16: {
    fontSize: getFontSize(16),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label16Light: {
    fontSize: getFontSize(16),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label15: {
    fontSize: getFontSize(15),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label15Light: {
    fontSize: getFontSize(15),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label14: {
    fontSize: getFontSize(14),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label14Light: {
    fontSize: getFontSize(14),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label13: {
    fontSize: getFontSize(13),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label13Light: {
    fontSize: getFontSize(13),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label12: {
    fontSize: getFontSize(12),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label12Light: {
    fontSize: getFontSize(12),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label11Light: {
    fontSize: getFontSize(11),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label11: {
    fontSize: getFontSize(11),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label10: {
    fontSize: getFontSize(10),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label10Light: {
    fontSize: getFontSize(10),
    color: theme.text.label,
  },
  label9: {
    fontSize: getFontSize(9),
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  label9Light: {
    fontSize: getFontSize(9),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label8: {
    fontSize: getFontSize(8),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label8Light: {
    fontSize: getFontSize(8),
    color: theme.text.label,
    fontFmaily: 'Rubik-Light',
  },
  label: {
    color: theme.text.label,
    fontFamily: 'Rubik-Medium',
  },
  numbers: {
    fontSize: getFontSize(22),
    color: theme.text.label,
  },
});
