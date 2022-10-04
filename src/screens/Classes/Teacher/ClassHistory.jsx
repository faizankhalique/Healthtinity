import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppHeader from '../../../components/AppHeader';
import {Label13Light, Label17, getFontSize} from '../../../components/AppText';
import theme from '../../../config/theme';
import AppButton from '../../../components/AppButton';
const classes = [
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '12th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '13th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '14th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '15th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '16th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '17th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
];
const ClassItem = ({title, teacherName, date, location}) => {
  return (
    <>
      <View
        style={[
          {
            marginVertical: wp(0.5),
            paddingVertical: wp(3),
            paddingHorizontal: wp(3),
            backgroundColor: 'rgba(48, 139, 133, 0.08)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: wp(26),
          },
        ]}>
        <View>
          <Label17
            style={{
              color: theme.brand.primary,
              fontFamily: 'Rubik-Regular',
            }}>
            {title}
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
      </View>
      <View style={styles.line} />
    </>
  );
};
export default function ClassHistory({route}) {
  const isHistory = route?.params?.isHistory;
  const isBooked = route?.params?.isBooked;
  return (
    <View style={styles.container}>
      <AppHeader title={'History'} />
      {isHistory ? (
        <ScrollView
          style={{flex: 1, marginTop: wp(11)}}
          showsVerticalScrollIndicator={false}>
          {classes.map((item, i) => (
            <ClassItem
              key={i}
              title={item.title}
              teacherName={item.teacherName}
              date={item.date}
              location={item.location}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Label13Light style={{color: theme.brand.primary}}>
            {' No Class completed yet'}
          </Label13Light>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(5),
    paddingHorizontal: wp(4),
  },
  line: {
    backgroundColor: '#308B85',
    width: '92%',
    alignSelf: 'center',
    height: 1,
    marginTop: wp(1.5),
    marginBottom: wp(1),
  },
});
