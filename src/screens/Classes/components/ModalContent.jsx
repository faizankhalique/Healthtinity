import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Label17, Label13Light, getFontSize} from '../../../components/AppText';
import AppButton from '../../../components/AppButton';
import theme from '../../../config/theme';

export default function ModalContent({
  title,
  classTitle,
  teacherName,
  date,
  location,
  firstButtonTitle,
  onFirstButtonClick,
  secondButtonTitle,
  onSecondButtonClick,
}) {
  return (
    <View
      style={{
        width: wp('92%'),
        backgroundColor: theme.custom.white,
        alignItems: 'center',
        paddingVertical: wp(5.5),
      }}>
      <Label17
        style={{fontFamily: 'Rubik-SemiBold', color: theme.brand.primary}}>
        {title}
      </Label17>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: wp(4),
        }}>
        <Label17
          style={{
            color: theme.brand.primary,
            fontFamily: 'Rubik-Regular',
          }}>
          {classTitle}
        </Label17>
        <Label13Light
          style={{
            color: 'black',
            fontFamily: 'Rubik-Light',
            marginTop: wp(1.5),
          }}>
          {teacherName}
        </Label13Light>
        <Label13Light
          style={{
            color: 'black',
            fontFamily: 'Rubik-Light',
            marginTop: wp(1),
          }}>
          {date}
        </Label13Light>
        <Label13Light
          style={{
            color: 'black',
            fontFamily: 'Rubik-Light',
            marginTop: wp(1),
          }}>
          {location}
        </Label13Light>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp(6),
          width: '80%',
        }}>
        <AppButton
          noShadow
          variant={'outlined'}
          title={firstButtonTitle}
          onPress={onFirstButtonClick}
          buttonStyles={{
            height: wp(9.5),
            width: wp(32),
            borderRadius: wp(3),
            backgroundColor: 'white',
          }}
          textStyles={{
            fontSize: getFontSize(15.5),
            fontFamily: 'Rubik-Regular',
          }}
        />
        <AppButton
          noShadow
          variant={'outlined'}
          title={secondButtonTitle}
          onPress={onSecondButtonClick}
          buttonStyles={{
            height: wp(9.5),
            width: wp(32),
            borderRadius: wp(3),
            backgroundColor: 'white',
          }}
          textStyles={{
            fontSize: getFontSize(15.5),
            fontFamily: 'Rubik-Regular',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainerStyles: {
    backgroundColor: theme.ui.overlay,
  },
});
