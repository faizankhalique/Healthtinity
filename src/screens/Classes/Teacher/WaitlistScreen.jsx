import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppHeader from '../../../components/AppHeader';
import {
  Label13Light,
  Label17,
  Body17,
  Label16,
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
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '17th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
];
const ClassItem = ({title, teacherName, date, location, onCancel}) => {
  return (
    <View
      style={[
        {
          marginVertical: wp(1.5),
          // paddingVertical: wp(3),
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

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          height: '100%',
          paddingVertical: wp(2),
        }}>
        <AppButton
          variant={'outlined'}
          noShadow
          buttonStyles={{
            height: wp(5.5),
            width: wp(16),
            padding: 0,
            backgroundColor: '#FFFFFF',
            borderRadius: 0,
          }}
          textStyles={{
            fontSize: getFontSize(9),
            fontFamily: 'Rubik-Regular',
          }}
          title={'Waiting'}
        />
        <AppButton
          noShadow
          buttonStyles={{
            height: wp(6.5),
            width: wp(22),
            borderRadius: wp(1),
          }}
          textStyles={{
            fontSize: getFontSize(11.5),
            fontFamily: 'Rubik-Regular',
          }}
          title={'Cancel'}
          onPress={onCancel}
        />
      </View>
    </View>
  );
};
export default function WaitlistScreen({route}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <AppHeader title={'Waitlist'} />
      <ScrollView
        style={{flex: 1, marginTop: wp(7)}}
        showsVerticalScrollIndicator={false}>
        {classes.map((item, i) => (
          <ClassItem
            key={i}
            title={item.title}
            teacherName={item.teacherName}
            date={item.date}
            location={item.location}
            onCancel={() => setModalVisible(true)}
          />
        ))}
      </ScrollView>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContainerStyles={styles.modalContainerStyles}
        outsideClickClose>
        <ModalContent
          title={'You are about to cancel Waitlist'}
          classTitle="Beginner Yoga"
          teacherName={'Teacher Kai'}
          date={'12th Aug,2022 9:00am'}
          location={'Location and Studio number'}
          firstButtonTitle={'Back'}
          onFirstButtonClick={() => setModalVisible(false)}
          secondButtonTitle={'Confirm'}
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
  modalContainerStyles: {
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    backgroundColor: theme.ui.overlay,
  },
});
