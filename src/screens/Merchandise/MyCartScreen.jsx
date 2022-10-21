import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Label17Light} from '../../components/AppText';
import theme from '../../config/theme';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';

export default function MyCartScreen({navigation}) {
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
        title={'My Cart'}
        containerStyles={{paddingLeft: wp(4)}}
        horizontal={true}
      />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: wp(12),
              justifyContent: 'center',
            }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <TouchableOpacity
                style={{
                  marginHorizontal: wp(2),
                  borderWidth: 1,
                  borderColor: theme.brand.primary,
                  marginVertical: wp(2),
                  borderTopLeftRadius: wp(6),
                  borderTopRightRadius: wp(6),
                  height: wp(60),
                  width: wp(45),
                }}
                key={i}
                onPress={() => {}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {i % 2 === 0 ? (
                    <Image
                      key={i}
                      source={require('../../assets/Leather-Bag.png')}
                      style={{
                        height: wp(20),
                        width: wp(15),
                        resizeMode: 'contain',
                      }}
                    />
                  ) : (
                    <Image
                      key={i}
                      source={require('../../assets/Bag-Transparent.png')}
                      style={{
                        height: wp(20),
                        width: wp(15),
                        resizeMode: 'contain',
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    backgroundColor: theme.brand.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    key={i}
                    source={require('../../assets/trash.png')}
                    style={{
                      height: wp(8),
                      width: wp(9),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <Image
        source={require('../../assets/Line.png')}
        style={{
          height: wp(2),
          width: '100%',
          marginBottom: wp(6),
        }}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          paddingTop: wp(6),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: wp(5),
          }}>
          <Label17Light style={{color: theme.brand.primary}}>
            Total
          </Label17Light>
          <Label17Light style={{color: theme.brand.primary}}>
            SGD$ 200:00
          </Label17Light>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginVertical: wp(5),
            paddingHorizontal: wp(5),
          }}>
          <Label17Light style={{color: theme.brand.primary}}>
            Delivery fee
          </Label17Light>
          <Label17Light style={{color: theme.brand.primary}}>
            SGD$ 20:00
          </Label17Light>
        </View>
        <View
          style={{
            backgroundColor: theme.brand.primary,
            height: 2,
            width: '100%',
            marginTop: wp(2),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: wp(5),
            marginVertical: wp(5),
          }}>
          <Label17Light style={{color: theme.brand.primary}}>
            Sub Total
          </Label17Light>
          <Label17Light style={{color: theme.brand.primary}}>
            SGD$ 220:00
          </Label17Light>
        </View>
        <AppButton
          title={'CHECKOUT'}
          onPress={() => {
            navigation.navigate('Checkout', null);
          }}
          buttonStyles={{
            width: '90%',
            height: wp(13),
            alignSelf: 'center',
            borderRadius: 0,
            marginTop: wp(12),
          }}
          noShadow
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
