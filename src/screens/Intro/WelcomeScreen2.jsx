import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppIntroSlider from 'react-native-app-intro-slider';
import {getFontSize, Label15, Label16} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';

const slides = [
  {
    key: 1,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: `“Most people have no idea how\n good their body is designed to\n feel.” —Kevin Trudeau`,
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];
export default function WelcomeScreen2({navigation}) {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Label15 style={styles.title}>
          {`“Most people have no idea how\n good their body is designed to\n feel.”`}
          <Label16 style={[styles.title, {fontFamily: 'Rubik-Bold'}]}>
            —Kevin Trudeau
          </Label16>
        </Label15>
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
  };
  return (
    <ImageBackground
      style={styles.imageBackground}
      // resizeMode={""}
      source={require('../../assets/wellcomeBackground.jpg')}>
      <View style={{flex: 1, backgroundColor: theme.ui.overlayLight}}>
        {/* <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={{
            backgroundColor: theme.custom.white,
            width: wp(6),
            height: wp(1),
            bottom: wp(14),
          }}
          activeDotStyle={{
            backgroundColor: theme.custom.green,
            width: wp(6),
            height: wp(1),
            bottom: wp(14),
          }}
        /> */}
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: wp(9),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(5),
          }}>
          <AppButton
            onPress={() => navigation.navigate('SignupScreen', null)}
            title="Sign up"
            buttonStyles={{width: wp('30%')}}
            textStyles={{fontSize: getFontSize(16)}}
          />
          <AppButton
            onPress={() => navigation.navigate('LoginScreen', null)}
            title="Sign in"
            buttonStyles={{width: wp('30%')}}
            textStyles={{fontSize: getFontSize(16)}}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  slide: {
    width: wp(75),
    position: 'absolute',
    bottom: hp(28),
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    lineHeight: wp(5.5),
  },
});
