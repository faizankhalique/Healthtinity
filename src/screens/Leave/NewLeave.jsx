import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
// import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
  Body11,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppHeader from '../../components/AppHeader';

function NewLeaveScreen() {
  const [markDate, setMarkDate] = useState();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? statusBarHeight + wp(4) : wp(4)},
      ]}>
      <AppHeader
        title={'New leave'}
        titleStyles={{fontSize: getFontSize(32)}}
        containerStyles={{alignItems: 'center'}}
        iconStyles={{left: wp(4)}}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: wp(3),
            borderColor: theme.brand.primary,
            borderWidth: 0.5,
            borderRadius: wp(8),
            padding: wp(2),
            marginTop: wp(2),
          }}>
          <ImageBackground
            source={require('../../assets/calender.png')}
            style={{height: wp(60), width: '100%'}}
            resizeMode="contain">
            <View
              style={{
                height: wp(10),
                width: wp(10),
                borderRadius: wp(10 / 2),
                backgroundColor: theme.brand.primary,
                position: 'absolute',
                top: wp(20.5),
                left: wp(34),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Body11>5</Body11>
            </View>
            <Image
              source={require('../../assets/chevron-right.png')}
              style={{
                position: 'absolute',
                top: wp(1),
                left: wp(34),
                height: wp(4),
                width: wp(4),
              }}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/chevron-right.png')}
              style={{
                position: 'absolute',
                top: wp(1),
                left: wp(51.5),
                height: wp(4),
                width: wp(4),
                transform: [{rotate: '180deg'}],
              }}
              resizeMode="contain"
            />
          </ImageBackground>
          {/* <Calendar
          markedDates={markDate}
          onDayPress={(day) => {
            console.log("selected day", day);
            setMarkDate({
              [day.dateString]: {
                selected: true,
                selectedColor: "#308B85",
                selectedTextColor: "white",
              },
            }),
              console.log(markDate);
          }}
          showWeekNumbers={true}
          hideExtraDays={true}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          theme={{
            weekVerticalMargin: 5,
            backgroundColor: "white",
            calendarBackground: "white",
            textSectionTitleColor: "grey",
            todayTextColor: "#308B85",
            arrowColor: "#308B85",
            selectedDayTextColor: "#308B85",

            disabledArrowColor: "black",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "200",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        /> */}
          <View style={styles.borderLine} />
          <View style={[styles.typeContainer, {marginTop: wp(2)}]}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={require('../../assets/arrow-from-left.png')}
                style={{width: wp(8), height: wp(8)}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.greenText}>Type</Text>
              <Text style={styles.normalText}>Casual</Text>
            </View>
          </View>
          <View style={[styles.borderLine, {marginTop: 0}]} />
          <View style={styles.typeContainer}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={require('../../assets/arrow-from-left.png')}
                style={{
                  width: wp(8),
                  height: wp(8),
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.greenText}>Casual</Text>
              <Text style={styles.normalText}>Trip to NewYork</Text>
            </View>
          </View>
          <View style={[styles.borderLine, {marginTop: 0}]} />
          <View style={styles.typeContainer}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                style={{width: wp(8), height: wp(8)}}
                source={require('../../assets/arrow-from-left.png')}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.greenText}>From</Text>
              <Text style={styles.normalText}>Wed , 5 Jab 2022 9:30 am</Text>
            </View>
          </View>
          <View style={[styles.borderLine, {marginTop: 0}]} />
          <View style={[styles.typeContainer, {borderBottomWidth: 0}]}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={require('../../assets/arrow-from-left.png')}
                style={{
                  width: wp(8),
                  height: wp(8),
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.greenText}>To</Text>
              <Text style={styles.normalText}>Fri , 7 Jab 2022 9:30 am</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginVertical: 15,
            }}>
            <View style={styles.submitButton}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                Apply for 3 Days Leave
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  typeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    // borderBottomColor: 'rgba(48, 139, 133, 0.15)',
    // borderBottomWidth: 1 / 2,
    marginHorizontal: wp(2),
  },
  imageContainer: {
    backgroundColor: 'rgba(48, 139, 133, 0.08)',
    height: wp(12),
    width: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  borderLine: {
    marginTop: wp(8),
    // marginHorizontal: 15,
    backgroundColor: 'rgba(48, 139, 133, 0.15)',
    width: '85%',
    height: 1,
    alignSelf: 'center',
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#308B85',
    // width: "50%",
    alignSelf: 'center',
  },
  greenText: {
    color: '#308B85',
    fontSize: 14,
    marginBottom: 4,
  },
  normalText: {
    fontSize: 16,
    fontFamily: 'Rubik-Light',
  },
  image: {
    flex: 1,
  },
});
export default NewLeaveScreen;
