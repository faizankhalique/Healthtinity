import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Body22,
  getFontSize,
  Body19,
  Label17Light,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';
import NavigationService from '../../navigation/NavigationService';

export default function ProductDetailsScreen() {
  const [quantity, setQuantity] = React.useState('1');
  console.log('quantity', quantity);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../../assets/Product.png')}
        style={{width: wp('100%'), height: wp(85)}}
        // resizeMode={'contain'}
      >
        <TouchableOpacity onPress={() => NavigationService.goBack()}>
          <Image
            source={require('../../assets/chevron-right-black.png')}
            style={{height: wp(8), width: wp(8), top: wp(15), left: wp(6)}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{flex: 1, paddingHorizontal: wp(4)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Body22
            style={{
              color: theme.brand.primary,
              fontFmaily: 'Rubik-Regular',
              fontWeight: '400',
              marginVertical: wp(1.5),
              fontSize: getFontSize(24),
            }}>
            Product name
          </Body22>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate('MyCart', null);
            }}>
            <Image
              source={require('../../assets/cart.png')}
              style={{height: wp(15), width: wp(15), backgroundColor: 'white'}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <Body19 style={{color: theme.brand.primary, fontFmaily: 'Rubik-Light'}}>
          Product number
        </Body19>
        <Label17Light style={{marginVertical: wp(8)}}>
          {`This section contains the \nproduct description`}
        </Label17Light>
        <Body19
          style={{
            color: 'black',
            fontFmaily: 'Rubik-Regular',
            fontWeight: '400',
          }}>
          Product Specfications
        </Body19>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: wp(25),
            alignSelf: 'center',
          }}>
          <AppButton
            title={'ADD TO CART'}
            noShadow
            buttonStyles={{width: '48%', height: wp(13), borderRadius: 0}}
          />
          <View
            style={{
              backgroundColor: theme.brand.primary,
              height: wp(13),
              width: '48%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: wp(1),
            }}>
            <TextInput
              placeholder="Quantity"
              placeholderTextColor={'#D9D9D9'}
              style={{
                height: wp(11),
                width: wp(28),
                backgroundColor: 'white',
                paddingHorizontal: wp(2),
                color: 'black',
              }}
              keyboardType={'number-pad'}
              value={quantity}
              onChangeText={v => setQuantity(v)}
              // defaultValue={quantity}
            />
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  setQuantity(q => parseInt(q) + 1);
                }}
                style={{
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/VectorUp.png')}
                  style={{height: wp(3), width: wp(3)}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View
                style={{backgroundColor: 'white', height: 2, width: '100%'}}
              />
              <TouchableOpacity
                onPress={() => {
                  setQuantity(q => parseInt(q) - 1);
                }}
                style={{
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/VectorDown.png')}
                  style={{height: wp(3), width: wp(3)}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
