import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Label19,
  Label13Light,
  Label17,
  Body22,
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
    date: '12th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '12th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
  {
    title: 'Beginner Yoga',
    teacherName: 'Teacher Kai',
    date: '12th Aug,2022 9:00am',
    location: 'Location and Studio',
  },
];

export default function ClassScreen({navigation}) {
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

          <View
            style={{
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <AppButton
              variant={'outlined'}
              noShadow
              buttonStyles={{
                height: wp(6.5),
                width: wp(22),
                padding: 0,
                backgroundColor:
                  Platform.OS === 'ios'
                    ? 'rgba(48, 139, 133, 0.08)'
                    : 'rgba(48, 139, 133, 0.15)',
              }}
              textStyles={{
                fontSize: getFontSize(11.5),
                fontFamily: 'Rubik-Regular',
              }}
              title={'Confirmed'}
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
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <View style={styles.line} />
      </>
    );
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <AppButton
          onPress={() => {
            navigation.navigate('ClassHistory', {
              isBooked: false,
              isHistory: true,
            });
          }}
          title={'History'}
          noShadow
          buttonStyles={{
            // borderRadius: 0,
            height: wp(8),
            width: wp(25),
            right: wp(2),
            alignSelf: 'flex-end',
          }}
          textStyles={{
            fontSize: getFontSize(14),
            fontFamily: 'Rubik-Regular',
          }}
        />
        <Body22
          style={{
            color: theme.brand.primary,
            marginLeft: wp(4),
            fontSize: getFontSize(24),
          }}>
          Booked Classes
        </Body22>
        <ScrollView
          style={{flex: 1, marginTop: wp(8)}}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: wp(10),
            }}>
            <AppButton
              title={'Book a Mat'}
              onPress={() => {
                navigation.navigate('BookingScreen', null);
              }}
              buttonStyles={{
                height: wp(14.5),
                width: '46%',
                // borderRadius: 0,
              }}
              textStyles={{
                fontSize: getFontSize(16.5),
                fontFamily: 'Rubik-Regular',
              }}
            />
            <AppButton
              title={'Waitlist'}
              onPress={() => {
                navigation.navigate('Waitlist', null);
              }}
              buttonStyles={{
                height: wp(14.5),
                width: '46%',
                // borderRadius: 0,
              }}
              textStyles={{
                fontSize: getFontSize(16.5),
                fontFamily: 'Rubik-Regular',
              }}
            />
          </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ui.backgroundWhite,
    paddingTop: wp(4),
    paddingHorizontal: wp(3),
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
