import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppButton from '../../components/AppButton';
import {Label17} from '../../components/AppText';

export default function PaymentSuccessScreen2({navigation}) {
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
      <View style={{alignSelf: 'center', bottom: wp(48), position: 'absolute'}}>
        <Label17 style={{alignSelf: 'center'}}>Order No.</Label17>
        <Label17 style={{alignSelf: 'center'}}>#292857463728</Label17>
      </View>

      <AppButton
        title={'Merchandise'}
        onPress={() => {
          navigation.navigate('Merchandise', null);
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
