import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppButton from '../../components/AppButton';

export default function PaymentSuccessScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/payment-successfull.png')}
        style={{height: wp(65), width: wp(65)}}
        resizeMode="contain"
      />
      <AppButton
        title={'Book a Mat'}
        onPress={() => {
          navigation.navigate('Package', null);
        }}
        buttonStyles={{
          // marginVertical: wp(2),
          // marginBottom: wp(4),
          width: '50%',
          alignSelf: 'center',
          position: 'absolute',
          bottom: wp(30),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
