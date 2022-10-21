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
  Label15,
  Label11Light,
  Label14Light,
  Body21,
  getFontSize,
  Body12,
  Label13,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';

export default function CheckoutScreen({navigation, route}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: 'white',
          paddingTop: Platform.OS == 'ios' ? statusBarHeight + wp(2) : wp(4),
        },
      ]}>
      <AppHeader
        title={'Check out page'}
        containerStyles={{marginLeft: wp(3)}}
      />
      <Body12
        style={{
          color: 'black',
          fontFamily: 'Rubik-Regular',
          top: wp(1),
          marginLeft: wp(15),
        }}>
        Credit or Debit Card
      </Body12>
      <View
        style={{
          height: wp(20),
          marginTop: wp(7),
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: wp(5),
          paddingHorizontal: wp(16),
          marginBottom: wp(4),
        }}>
        <View>
          <Label15
            style={{
              color: theme.brand.primary,
              fontFamily: 'Rubik-SemiBold',
              //   top: wp(2),
            }}>
            Save Payment Method Found
          </Label15>
          <Label13
            style={{
              color: 'black',
              fontFamily: 'Rubik-SemiBold',
              top: wp(1.5),
              left: wp(1),
            }}>
            1234**********7878
          </Label13>
        </View>
      </View>
      <AppButton
        title={'CHANGE CARD'}
        onPress={() => {
          navigation.navigate('ManageMyCard', null);
        }}
        buttonStyles={{
          width: '92%',
          marginVertical: wp(2),
          alignSelf: 'center',
          borderRadius: 0,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
        }}
      />
      <AppButton
        title={'PAY NOW'}
        onPress={() => {
          navigation.navigate('PaymentSuccess2', null);
        }}
        buttonStyles={{
          width: '92%',
          marginVertical: wp(2),
          alignSelf: 'center',
          borderRadius: 0,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
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
