import {
  Image,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Body16,
  getFontSize,
  Body15,
  Label20,
  Heading3,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';
import CustomModal from '../../components/AppModal';

export default function ProfileScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const ProfileItem = props => {
    return (
      <TouchableOpacity
        style={[
          {
            flexDirection: 'row',
            backgroundColor: 'rgba(48, 139, 133, 0.08)',
            paddingVertical: wp(3),
            marginVertical: wp(2),
            width: '100%',
          },
          {...props.itemStyles},
        ]}
        onPress={props.onPress}>
        <Image
          style={{height: wp(8), width: wp(8), marginHorizontal: wp(4)}}
          source={props.image}
          resizeMode="contain"
        />
        {props.children}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Image
        style={{height: wp(20), width: wp(60), alignSelf: 'center'}}
        source={require('../../assets/WelcomeTrinity.png')}
        resizeMode="contain"
      />
      <AppButton
        image={require('../../assets/edit_pen.png')}
        onPress={() => {
          navigation.navigate('EditProfile', {LoginScreen: false});
        }}
        title={'Edit Profile'}
        buttonStyles={{alignSelf: 'center', width: wp('40%')}}
      />
      <View style={{marginTop: wp(13), marginBottom: wp(12)}}>
        <ProfileItem image={require('../../assets/vector.png')}>
          <View>
            <Body15 style={{color: 'black'}}>Sessions Purchased : 50</Body15>
            <Body15 style={{color: 'black', marginTop: wp(3)}}>
              Sessions Left : 48
            </Body15>
          </View>
        </ProfileItem>
        <ProfileItem
          image={require('../../assets/card-membership.png')}
          onPress={() => setModalVisible(true)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '78%',
            }}>
            <Body15 style={{color: 'black'}}>Membership Card</Body15>
            <Image
              style={{height: wp(6), width: wp(6), alignSelf: 'center'}}
              source={require('../../assets/chevron-left.png')}
              resizeMode="contain"
            />
          </View>
        </ProfileItem>
        <Label20 style={{color: theme.custom.green, marginHorizontal: wp(4)}}>
          Payment
        </Label20>
        <ProfileItem
          image={require('../../assets/map.png')}
          onPress={() => navigation.navigate('TransactionHistory', null)}>
          <Body15 style={{color: 'black'}}>Transaction History</Body15>
        </ProfileItem>
        <ProfileItem
          image={require('../../assets/credit-card.png')}
          onPress={() => navigation.navigate('ManageMyCard', null)}>
          <Body15 style={{color: 'black'}}>Manage My Card</Body15>
        </ProfileItem>
      </View>
      <AppButton
        title={'Log Out'}
        onPress={() => {
          navigation.navigate('LoginScreen', null);
        }}
        textStyles={{fontSize: getFontSize(20)}}
        buttonStyles={{width: '80%', alignSelf: 'center'}}
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContainerStyles={styles.modalContainerStyles}
        outsideClickClose>
        <View
          style={{
            height: hp('55%'),
            width: wp('100%'),
            borderRadius: wp(12),
            backgroundColor: theme.brand.primary,
            alignItems: 'center',
            paddingVertical: wp(10),
          }}>
          <Heading3 style={{fontFamily: 'Rubik-SemiBold'}}>
            Scan the QR code
          </Heading3>
          <Image
            source={require('../../assets/QRCode.png')}
            style={{height: wp(60), height: wp(60), top: wp(7)}}
            resizeMode="contain"
          />
        </View>
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? wp(25) : wp(12),
    backgroundColor: 'white',
  },
  modalContainerStyles: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: theme.ui.overlayMedium,
  },
});
