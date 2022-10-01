import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

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

export default function PackageScreen({navigation}) {
  const PackageItem = ({
    title,
    type,
    price,
    selectedPrice,
    itemStyles,
    isActive = false,
  }) => {
    return (
      <TouchableOpacity
        style={[
          {
            marginVertical: wp(0.5),
            paddingVertical: wp(5.5),
            paddingHorizontal: wp(6),
            backgroundColor: isActive
              ? theme.brand.primary
              : 'rgba(48, 139, 133, 0.08)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: wp(2),
          },
          {...itemStyles},
        ]}
        onPress={() => {
          navigation.navigate('PackageDescription', {title, price});
        }}>
        {type && (
          <AppButton
            buttonStyles={{
              height: wp(6),
              width: wp(22),
              borderRadius: 0,
              position: 'absolute',
              top: wp(0),
              right: wp(0),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
            textStyles={{
              fontSize: getFontSize(10),
              fontFamily: 'Rubik-Regular',
            }}
            title={type}
          />
        )}
        <Label14Light
          style={{
            color: isActive ? theme.custom.white : theme.brand.primary,
            fontFamily: 'Rubik-Regular',
            top: wp(1),
          }}>
          {title}
        </Label14Light>
        <View style={{top: wp(1), alignItems: 'flex-end'}}>
          <Label14Light
            style={{
              color: isActive ? theme.custom.white : theme.brand.primary,
              fontFamily: 'Rubik-Regular',
            }}>
            {price}
          </Label14Light>
          {selectedPrice && (
            <Label11Light
              style={{
                color: isActive ? theme.custom.white : theme.custom.black,
                fontFamily: 'Rubik-SemiBold',
                top: wp(2),
              }}>
              {selectedPrice}
            </Label11Light>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Body21 style={{color: theme.brand.primary, marginLeft: wp(8)}}>
          Buy A Class Pack
        </Body21>
        <ScrollView
          style={{flex: 1, marginTop: wp(10)}}
          showsVerticalScrollIndicator={false}>
          <PackageItem
            title={'2 STARTER CLASS'}
            price={'$50'}
            type="Exclusive"
          />
          <PackageItem title={'5 CLASS PACK'} price={'$50'} />
          <PackageItem
            title={'10 STARTER CLASS'}
            price={'$50'}
            selectedPrice={'-$33 in each class'}
          />
          <PackageItem
            title={'30 STARTER CLASS'}
            price={'$50'}
            selectedPrice={'-$33 in each class'}
          />
          <PackageItem
            title={'30 SHARE PACK'}
            price={'$50'}
            selectedPrice={'-$33 in each class'}
            isActive
          />
          <PackageItem
            title={'50 SHARE PACK'}
            price={'$50'}
            selectedPrice={'-$33 in each class'}
            isActive
          />
          <PackageItem title={'SINGLE CLASS'} price={'$50'} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ui.backgroundWhite,
    paddingTop: wp(5),
  },
});
