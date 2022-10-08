import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Label17Light} from '../../components/AppText';
import theme from '../../config/theme';
import AppHeader from '../../components/AppHeader';

export default function ProductsScreen({navigation, route}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'ios' ? statusBarHeight + wp(2) : wp(4),
      }}>
      <AppHeader
        title={route.params.catName}
        containerStyles={{paddingLeft: wp(4)}}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',

            paddingTop: wp(12),
            justifyContent: 'center',
          }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <TouchableOpacity
              style={{marginHorizontal: wp(2), marginVertical: wp(8)}}
              key={i}
              onPress={() => navigation.navigate('ProductDestail')}>
              {i % 2 === 0 ? (
                <Image
                  key={i}
                  source={require('../../assets/Leather-Bag.png')}
                  style={{
                    backgroundColor: 'rgba(48, 139, 133, 0.08)',
                    // borderWidth: 1,
                    // borderColor: theme.brand.primary,
                    height: wp(65),
                    width: wp(45),
                    borderRadius: wp(2),
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  key={i}
                  source={require('../../assets/Bag-Transparent.png')}
                  style={{
                    backgroundColor: 'rgba(48, 139, 133, 0.08)',
                    // borderWidth: 1,
                    // borderColor: theme.brand.primary,
                    height: wp(65),
                    width: wp(45),
                    borderRadius: wp(2),
                    resizeMode: 'contain',
                  }}
                />
              )}
              <Label17Light style={{color: theme.brand.primary}}>
                Product name
              </Label17Light>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
