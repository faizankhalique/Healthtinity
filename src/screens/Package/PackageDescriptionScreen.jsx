import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Label19,
  Label11Light,
  Label14Light,
  Body21,
  getFontSize,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';

export default function PackageDescriptionScreen({navigation, route}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View
      style={[
        styles.container,
        // {
        //   paddingTop: Platform.OS === 'ios' ? statusBarHeight : wp(4),
        // },
      ]}>
      <AppHeader
        title={'Buy A Class Pack'}
        containerStyles={{marginLeft: wp(3)}}
      />
      <View
        style={{
          height: wp(45),
          marginTop: wp(17),
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: wp(5),
          paddingHorizontal: wp(4),
        }}>
        <View>
          <Label14Light
            style={{
              color: theme.brand.primary,
              fontFamily: 'Rubik-Regular',
              //   top: wp(2),
            }}>
            {route?.params?.title}
          </Label14Light>
          <Label11Light style={{color: 'black', top: wp(1)}}>
            About The Class Pack
          </Label11Light>
        </View>
        <Label14Light
          style={{
            color: theme.brand.primary,
            fontFamily: 'Rubik-Regular',
            //   top: wp(2),
          }}>
          {route?.params?.price}
        </Label14Light>
      </View>
      <AppButton
        title={'Next'}
        onPress={() => {
          navigation.navigate('PackageSelection', {
            title: route?.params?.title,
          });
        }}
        buttonStyles={{
          width: '80%',
          position: 'absolute',
          bottom: wp(24),
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(5),
  },
});
