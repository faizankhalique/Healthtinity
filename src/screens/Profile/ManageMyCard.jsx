import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import AppHeader from '../../components/AppHeader';
import {Label12Light, getFontSize} from '../../components/AppText';
import theme from '../../config/theme';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

export default function ManageMyCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [showCalender, setCalender] = useState(false);
  const [dateShow, setDateShow] = useState();
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');

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
  };
  return (
    <View style={styles.container}>
      <AppHeader title={'Manage My Card'} />
      <View style={{flex: 1, paddingTop: wp(5), paddingHorizontal: wp(2)}}>
        <AppTextInput
          placeholder={'Input Card Number'}
          placeholderStyles={{color: 'black', fontSize: getFontSize(12)}}
          value={cardNumber}
          onChangeText={v => setCardNumber(v)}
          textInputContainerStyle={{
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor:
              Platform.OS === 'ios'
                ? 'rgba(48, 139, 133, 0.08)'
                : 'rgba(48, 139, 133, 0.15)',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,

            elevation: 0,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '48%',
            }}>
            {/* <AppTextInput
              placeholder={'Expiry Date'}
              placeholderStyles={{color: 'black', fontSize: getFontSize(12)}}
              value={expiryDate}
              onChangeText={v => setEpiryDate(v)}
              textInputContainerStyle={{
                borderWidth: 0,
                borderRadius: 0,
                backgroundColor:
                  Platform.OS === 'ios'
                    ? 'rgba(48, 139, 133, 0.08)'
                    : 'rgba(48, 139, 133, 0.15)',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              }}
            /> */}
            <>
              <Label12Light>Expiry Date</Label12Light>
              <TouchableOpacity
                style={{
                  height: wp(10.5),
                  paddingHorizontal: wp(2),
                  justifyContent: 'center',
                  // alignItems: 'center',
                  borderWidth: 0,
                  borderRadius: 0,
                  backgroundColor:
                    Platform.OS === 'ios'
                      ? 'rgba(48, 139, 133, 0.08)'
                      : 'rgba(48, 139, 133, 0.15)',
                }}
                onPress={() => {
                  setCalender(true);
                }}>
                {dateShow ? (
                  <Text style={{color: 'black'}}>{dateShow}</Text>
                ) : (
                  <Text style={{color: '#B3B3B3'}}></Text>
                )}

                <DateTimePickerModal
                  isVisible={showCalender}
                  mode="date"
                  onConfirm={date => {
                    onDateChange(date);
                  }}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
            </>
          </View>
          <View
            style={{
              width: '48%',
            }}>
            <AppTextInput
              placeholder={'CVC'}
              placeholderStyles={{
                color: 'black',
                fontSize: getFontSize(12),
                left: wp(3),
              }}
              value={cvc}
              onChangeText={v => setCvc(v)}
              textInputContainerStyle={{
                borderWidth: 0,
                borderRadius: 0,
                marginLeft: '8%',
                backgroundColor:
                  Platform.OS === 'ios'
                    ? 'rgba(48, 139, 133, 0.08)'
                    : 'rgba(48, 139, 133, 0.15)',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              }}
            />
          </View>
        </View>
        <AppButton
          onPress={() => {
            setCardNumber('');
            setDateShow();
            setCvc('');
          }}
          title="Save"
          buttonStyles={{
            alignSelf: 'center',
            width: '70%',
            marginTop: wp(8),
            borderRadius: 0,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(5),
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
  },
});
