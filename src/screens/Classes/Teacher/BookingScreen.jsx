import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppHeader from '../../../components/AppHeader';
import {
  Label13Light,
  Label17,
  Label12Light,
  Label11Light,
  getFontSize,
} from '../../../components/AppText';
import theme from '../../../config/theme';
import AppButton from '../../../components/AppButton';
import CustomModal from '../../../components/AppModal';
import ModalContent from '../components/ModalContent';
const classes = [
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
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '17th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
];
const ClassItem = ({title, teacherName, date, location, onBook}) => {
  return (
    <>
      <View
        style={[
          {
            marginVertical: wp(1.5),
            paddingLeft: wp(3),
            paddingRight: wp(1),
            backgroundColor: 'rgba(48, 139, 133, 0.08)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: wp(26),
          },
        ]}>
        <View
          style={{
            paddingVertical: wp(3),
          }}>
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

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: '100%',
            paddingVertical: wp(1.5),
          }}>
          <View />
          <AppButton
            noShadow
            buttonStyles={{
              height: wp(6.5),
              width: wp(22),
              borderRadius: wp(1.2),
            }}
            textStyles={{
              fontSize: getFontSize(11.5),
              fontFamily: 'Rubik-Regular',
            }}
            title={'Book'}
            onPress={onBook}
          />
        </View>
      </View>
    </>
  );
};

export default function BookingScreen({route}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selected, setSelected] = React.useState('Mo');
  const WeekItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor:
            selected == item.day
              ? theme.brand.primary
              : 'rgba(48, 139, 133, 0.08)',
          height: wp(16),
          width: wp(10),
          borderRadius: wp(2.5),
          alignItems: 'center',
          paddingTop: wp(1),
        }}
        onPress={() => setSelected(item.day)}>
        <Label12Light
          style={{
            color: selected == item.day ? 'white' : item.color,
          }}>
          {item.day}
        </Label12Light>
        <View
          style={{
            height: wp(6),
            width: wp(6),
            borderRadius: wp(1),
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: selected == item.day ? 'white' : theme.brand.primary,
            borderWidth: 1,
            marginTop: wp(1),
          }}>
          <Label11Light
            style={{
              color: selected == item.day ? 'white' : theme.brand.primary,
            }}>
            {item.date}
          </Label11Light>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <AppHeader title={'Book a mat'} containerStyles={{paddingLeft: wp(4)}} />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: wp(2),
          paddingTop: wp(4),
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(4),
        }}>
        {[
          {date: 31, day: 'Mo', color: 'black'},
          {date: 1, day: 'Tu', color: 'black'},
          {date: 2, day: 'We', color: 'black'},
          {date: 3, day: 'Th', color: 'black'},
          {date: 4, day: 'Fr', color: 'black'},
          {date: 5, day: 'Sa', color: theme.brand.primary},
          {date: 6, day: 'Su', color: theme.brand.primary},
        ].map((item, i) => (
          <WeekItem key={i} item={item} />
        ))}
      </View>
      <ScrollView
        style={{flex: 1, marginTop: wp(4)}}
        showsVerticalScrollIndicator={false}>
        {classes.map((item, i) => (
          <ClassItem
            key={i}
            title={item.title}
            teacherName={item.teacherName}
            date={item.date}
            location={item.location}
            onBook={() => setModalVisible(true)}
          />
        ))}
      </ScrollView>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContainerStyles={styles.modalContainerStyles}
        outsideClickClose>
        <ModalContent
          title={' Would you love to book a class ?'}
          classTitle="Beginner Yoga"
          teacherName={'Teacher Kai'}
          date={'12th Aug,2022 9:00am'}
          location={'Location and Studio number'}
          firstButtonTitle={'Back'}
          onFirstButtonClick={() => setModalVisible(false)}
          secondButtonTitle={'Proceed'}
          onSecondButtonClick={() => setModalVisible(false)}
        />
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(5),
    // paddingHorizontal: wp(4),
  },
  line: {
    backgroundColor: '#308B85',
    width: '92%',
    alignSelf: 'center',
    height: 1,
    marginTop: wp(1.5),
    marginBottom: wp(1),
  },
  modalContainerStyles: {
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    backgroundColor: theme.ui.overlay,
  },
});
