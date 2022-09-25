import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme from '../../config/theme';
import {Label22, Label16Light, Label12Light} from '../../components/AppText';
import AppButton from '../../components/AppButton';

export default function AttendanceScreen() {
  const AttendanceItem = () => {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp(10),
          paddingVertical: wp(2),
          borderBottomColor: theme.custom.green,
          borderBottomWidth: 1,
        }}>
        <View>
          <Label16Light style={{color: theme.custom.green}}>
            Clock In Trinity
          </Label16Light>
          <Label12Light style={{marginTop: wp(1)}}>08/08/2020</Label12Light>
        </View>
        <Label16Light>00:00 AM</Label16Light>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          alignItems: 'center',
          paddingVertical: wp(4),
        }}>
        <Label22 style={{color: theme.brand.primary}}>Attendance</Label22>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: wp(8),
          paddingHorizontal: wp(6),
        }}>
        <AppButton
          title={'Clock In'}
          onPress={() => {}}
          buttonStyles={{width: wp('42%'), borderRadius: 0}}
        />
        <AppButton
          title={'Clock Out'}
          onPress={() => {}}
          buttonStyles={{width: wp('42%'), borderRadius: 0}}
        />
      </View>
      <ScrollView
        style={{flex: 1, paddingHorizontal: wp(6)}}
        showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map(item => (
          <AttendanceItem key={item} />
        ))}
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
