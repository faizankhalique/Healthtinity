import React from 'react';
import {
  TextInput,
  View,
  ViewStyle,
  Image,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme from '../config/theme';
import {getFontSize, Label11Light} from './AppText';

const AppTextInput = ({
  icon,
  iconSize = 20,
  textInputContainerStyle,
  textInputIconStyle,
  textInputStyle,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  placeholder,
  password,
  onChangeText,
  value,
  isSearch,
  placeholderStyles,
}) => {
  const [isSecure, setIsSecure] = useState(password ? true : false);

  return (
    <View>
      {placeholder && (
        <Label11Light
          style={[
            {color: theme.custom.green, top: wp(2)},
            {...placeholderStyles},
          ]}>
          {placeholder}
        </Label11Light>
      )}
      <View style={[styles.container, {...textInputContainerStyle}]}>
        <TextInput
          // placeholderTextColor={theme.custom.black}
          style={[styles.textInput, {...textInputStyle}]}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          // placeholder={placeholder}
          secureTextEntry={isSecure}
          value={value}
          onChangeText={onChangeText}
        />
        {isSearch && (
          <Image
            style={styles.image}
            source={require('../assets/search.png')}
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: wp(4),
    marginVertical: wp(3),
    borderColor: theme.custom.green,
    borderWidth: 1.5,
    borderRadius: wp(1.5),
    backgroundColor: 'white',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    marginRight: 12,
    color: '#A0A0A0',
  },
  textInput: {
    flex: 1,
    color: 'black',
    fontSize: getFontSize(12),
    height: wp(10.5),
    // backgroundColor: 'red',
  },
  eye: {
    marginLeft: 12,
    //   color: '#A0A0A0',
    height: wp(6),
    width: wp(6),
  },
  eyeOff: {
    marginLeft: 12,
    //   color: '#A0A0A0',
    height: wp(6),
    width: wp(6),
  },
  image: {
    marginLeft: 12,
    //   color: '#A0A0A0',
    height: wp(8),
    width: wp(8),
  },
});
export default AppTextInput;
