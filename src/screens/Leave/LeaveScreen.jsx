import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Body22,
  getFontSize,
  Label14Light,
  Body15,
  Body17,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppButton from '../../components/AppButton';

export default function LeaveScreen({navigation}) {
  const [active, setActive] = useState('All');
  const LeaveButton = ({title}) => {
    return (
      <TouchableOpacity
        style={{
          height: wp(12),
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            active === title ? theme.custom.green : 'rgba(48, 139, 133, 0.08)',
        }}
        onPress={() => {
          setActive(title);
        }}>
        <Label14Light
          style={{color: active === title ? theme.custom.white : 'black'}}>
          {title}
        </Label14Light>
      </TouchableOpacity>
    );
  };
  const ClassItem = ({title, fillDate, date, type, itemStyles}) => {
    return (
      <View style={{marginVertical: wp(1)}}>
        <Label14Light
          style={{
            color: theme.brand.primary,
            marginRight: wp(8),
            zIndex: 100,
            marginVertical: wp(2),
          }}>
          December 2021
        </Label14Light>

        <TouchableOpacity
          style={[
            {
              paddingVertical: wp(7),
              paddingHorizontal: wp(6),
              backgroundColor: 'rgba(48, 139, 133, 0.08)',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: wp(2),
              borderRadius: wp(4),
            },
            {...itemStyles},
          ]}
          onPress={() => {
            // navigation.navigate('ClassDetail', {title});
          }}>
          <AppButton
            buttonStyles={{
              height: wp(6),
              width: wp(22),
              borderRadius: 0,
              position: 'absolute',
              top: wp(0),
              right: wp(4),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
            textStyles={{
              fontSize: getFontSize(10),
              fontFamily: 'Rubik-Regular',
            }}
            title={type}
          />
          <View>
            <Body17 style={{color: 'black'}}>{fillDate}</Body17>
            <Label14Light
              style={{
                color: theme.brand.primary,
                fontFamily: 'Rubik-Regular',
                top: wp(2),
              }}>
              {title}
            </Label14Light>
          </View>
          <Image
            style={{width: wp(6), height: wp(6)}}
            resizeMode="contain"
            source={require('../../assets/chevron-left-black.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(7),
          marginTop: wp(6),
        }}>
        <Body22
          style={{
            color: theme.brand.primary,
            // marginTop: wp(6),
            marginLeft: wp(8),
          }}>
          Leaves
        </Body22>
        <TouchableOpacity onPress={() => navigation.navigate('NewLeave', null)}>
          <Image
            source={require('../../assets/plus.png')}
            resizeMode="contain"
            style={{height: wp(12), width: wp(12)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(6),
          marginVertical: wp(2),
        }}>
        <LeaveButton title={'All'} isActive={true} />
        <LeaveButton title={'Casual'} />
        <LeaveButton title={'Sick'} />
      </View>
      <Label14Light style={{color: 'black', marginLeft: wp(6)}}>
        Leave:4days left
      </Label14Light>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: wp(6),
        }}
        showsVerticalScrollIndicator={false}>
        <ClassItem
          fillDate={'Thurs 20 Dec 2021'}
          title={'Casual Leave'}
          type={'Awaiting'}
        />
        <ClassItem
          fillDate={'Thurs 20 Dec 2021'}
          title={'Casual Leave'}
          type={'Awaiting'}
        />
        <ClassItem
          fillDate={'Thurs 20 Dec 2021'}
          title={'Casual Leave'}
          type={'Awaiting'}
        />
        <ClassItem
          fillDate={'Thurs 20 Dec 2021'}
          title={'Casual Leave'}
          type={'Awaiting'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
