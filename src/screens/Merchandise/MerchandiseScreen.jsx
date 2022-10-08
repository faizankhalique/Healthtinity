import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Label13Light,
  Label17,
  getFontSize,
  Body21,
} from '../../components/AppText';
import theme from '../../config/theme';

export default function MerchandiseScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Body21
          style={{
            color: theme.brand.primary,
            marginLeft: wp(8),
            marginTop: wp(6),
          }}>
          MERCHANDISE
        </Body21>
        <Label13Light
          style={{
            color: theme.brand.primary,
            fontFamily: 'Rubik-Light',
            marginLeft: wp(8),
            marginTop: wp(2),
          }}>
          Categories
        </Label13Light>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {[
            {title: 'BAGS', image: require('../../assets/bags.png')},
            {title: 'TOPS', image: require('../../assets/tops.png')},
            {
              title: 'ESSENTIALS',
              image: require('../../assets/essentials.png'),
            },
            {title: 'BOTTOMS', image: require('../../assets/bottoms.png')},
            {title: 'DRINKWARE', image: require('../../assets/drinkware.png')},
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate('ProductsScreen', {catName: item.title})
              }>
              <ImageBackground
                source={item.image}
                style={{
                  width: wp(85),
                  height: wp(38),
                  marginVertical: wp(3),
                  alignSelf: 'center',
                  borderRadius: wp(2),
                  overflow: 'hidden',
                  // borderColor: 'red',
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                // resizeMode="contain"
              >
                <Label17 style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
                  {item.title}
                </Label17>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
