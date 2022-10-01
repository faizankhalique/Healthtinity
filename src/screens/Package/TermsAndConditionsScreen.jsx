import {StyleSheet, View, ScrollView, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Label12Light, Body13} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';

export default function TermsAndConditions({navigation, route}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [isSelected, setSelection] = React.useState(false);
  return (
    <View style={[styles.container]}>
      <AppHeader
        title={'Terms And Conditions'}
        containerStyles={{marginLeft: wp(3)}}
      />
      <ScrollView
        style={{paddingHorizontal: wp(6), paddingVertical: wp(2)}}
        showsVerticalScrollIndicator={false}>
        <Body13
          style={{
            color: 'black',
            fontFamily: 'Rubik-Light',
            textAlign: 'left',
            lineHeight: wp(5),
          }}>
          {
            '1. Upon purchasing the membership, the client agrees to\n the following terms and conditions. \n2. You declare that you are physically fit for the session. \n3. You declare that you are mentally sound and will not\n cause injury to yourself and the surrounding individuals. \n4. You understands that you may face some challenging\n pose/s and understand your body limit well. If the pose faces\n some challenges you think will cause injury, you must exit\n the pose. \n5. You must declare all injuries beforehand to our teacher.\nHealthtinity will not be liable for any injury before, during and\n after the session. \n6. Healthtinity treats all harassment as a major offence.\nPlease maintain a proper code of conduct to all teachers and\n members. \n7. You will not hold Healthtinity responsible or liable in any\ncircumstances. \n8. Important : Results varies from individuals. Commitment is required on your part to see a breakthrough!'
          }
        </Body13>
        <View style={styles.checkboxContainer}>
          <CheckBox
            boxType="square"
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
            style={styles.checkbox}
            onCheckColor={'white'}
            tintColor={theme.custom.green}
            lineWidth={wp(0.3)}
            tintColors={{false: 'black'}}
            onFillColor={theme.custom.green}
            onTintColor={theme.custom.green}
          />
          <Label12Light style={styles.label}>
            I have read through the T and C
          </Label12Light>
        </View>
        <AppButton
          title={'CONFIRM PAYMENT'}
          onPress={() => {
            navigation.navigate('PaymentSuccess', null);
          }}
          buttonStyles={{
            marginVertical: wp(2),
            marginBottom: wp(4),
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(5),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    marginVertical: wp(2),
  },
  checkbox: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
  label: {
    left: 8,
    color: theme.custom.green,
  },
});
