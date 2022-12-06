import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';

import {Label19, Label8Light, Label11Light} from '../../components/AppText';
import theme from '../../config/theme';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function LoginScreen({navigation, route}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [showCalender, setCalender] = useState(false);
  const [error, setError] = useState('');
  const [date, setDate] = useState('');
  const [dateShow, setDateShow] = useState();

  const hideDatePicker = () => {
    setCalender(false);
  };
  const onDateChange = date => {
    setCalender(false);
    const newDate = new Date(date);
    var date1 = newDate.getDate();
    var month = newDate.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = newDate.getFullYear();

    var dateStr = month + '/' + date1 + '/' + year;
    setDateShow(dateStr);
    setDate(newDate.toISOString());
    // setDateErr(false);
  };
  const handleSubmit = () => {
    if (!firstName) {
      setError('Please enter First Name');
      return;
    }
    if (!lastName) {
      setError('Please enter last Name');
      return;
    } else if (!date) {
      setError('Please enter Date of Birth');
      return;
    } else if (!phoneNumber) {
      setError('Please enter Phone Number');
      return;
    } else if (!homeAddress) {
      setError('Please enter Home Address');
      return;
    } else if (!emergencyContactName) {
      setError('Please enter Emergency Contact Name');
      return;
    } else if (!emergencyContactNumber) {
      setError('Please enter Emergency Contact Number');
      return;
    } else {
      setFirstName('');
      setLastName('');
      setHomeAddress('');
      setDate('');
      setPhoneNumber('');
      setEmergencyContactName('');
      setEmergencyContactNumber('');
      setError('');
      if (route?.params?.LoginScreen) navigation.navigate('LoginScreen', {});
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1, width: '100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: wp(20)}}
          showsVerticalScrollIndicator={false}>
          <Label19 style={styles.profileLabel}>Update Profile Details</Label19>
          <View style={{paddingVertical: wp(8)}}>
            <AppTextInput
              placeholder={'First Name'}
              value={firstName}
              onChangeText={v => {
                setFirstName(v);
                setError('');
              }}
            />
            <AppTextInput
              placeholder={'Last Name'}
              value={lastName}
              onChangeText={v => {
                setLastName(v);
                setError('');
              }}
            />
            <Label11Light style={{color: theme.custom.green, top: wp(2)}}>
              {'Date Of Birth'}
            </Label11Light>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderColor: theme.custom.green,
                borderWidth: 1.5,
                color: '#636F82',
                borderRadius: wp(1),
                marginVertical: wp(3),
                height: wp(10.5),
                paddingHorizontal: wp(2),
                paddingRight: 11,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }}
              onPress={() => {
                setCalender(true);
              }}>
              {dateShow ? (
                <Text style={{color: 'black'}}>{dateShow}</Text>
              ) : (
                <Text style={{color: '#B3B3B3'}}>mm/dd/yy</Text>
              )}

              <DateTimePickerModal
                isVisible={showCalender}
                mode="date"
                onConfirm={date => {
                  onDateChange(date);
                  setError('');
                }}
                onCancel={hideDatePicker}
              />
              <Image
                style={{height: 20, width: 20}}
                resizeMode="contain"
                source={require('../../assets/chevron.png')}
              />
            </TouchableOpacity>
            <AppTextInput
              placeholder={'Phone Number'}
              value={phoneNumber}
              keyboardType={'phone-pad'}
              onChangeText={v => {
                setPhoneNumber(v);
                setError('');
              }}
            />
            <AppTextInput
              placeholder={'Home Address'}
              value={homeAddress}
              onChangeText={v => {
                setHomeAddress(v);
                setError('');
              }}
            />
            <AppTextInput
              placeholder={'Emergency Contact Name'}
              value={emergencyContactName}
              onChangeText={v => {
                setEmergencyContactName(v);
                setError('');
              }}
            />
            <AppTextInput
              placeholder={'Emergency Contact Number'}
              value={emergencyContactNumber}
              keyboardType={'phone-pad'}
              onChangeText={v => {
                setEmergencyContactNumber(v);
                setError('');
              }}
            />
            {error && (
              <Label8Light style={{color: '#DC1D1D', marginBottom: wp(2)}}>
                {error}
              </Label8Light>
            )}
          </View>
          <AppButton
            onPress={handleSubmit}
            title={'Submit'}
            buttonStyles={{}}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: theme.ui.backgroundWhite,
    paddingHorizontal: wp(4),
  },
  profileLabel: {
    // fontFamily: 'Rubik-Regular',
    marginTop: wp(25),
    color: theme.custom.green,
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
  },
  checkbox: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
  label: {
    left: 8,
  },
  forgotPasswordlabel: {
    color: '#F83C3C',
  },
});
