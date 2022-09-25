import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Body16, getFontSize} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/signature.png')}
        style={{height: wp(35), width: wp('100%'), marginTop: wp(60)}}
        resizeMode="contain"
      />
      <View style={styles.bottomContainer}>
        <Body16 style={styles.label}>Hello! 你好! Apa Kabar! வணக்கம்!</Body16>
        <AppButton
          onPress={() => navigation.navigate('WelcomeScreen2', null)}
          title={'Get Started'}
          buttonStyles={styles.buttonStyles}
          textStyles={styles.textStyles}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.custom.white,
  },
  label: {
    color: theme.custom.green,
  },
  buttonStyles: {
    width: '90%',
    marginTop: wp(15),
  },
  textStyles: {
    fontSize: getFontSize(21),
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: wp(30),
  },
});
