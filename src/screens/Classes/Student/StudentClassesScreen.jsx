import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Body15,
  getFontSize,
  Label12Light,
  Label14,
} from '../../../components/AppText';
import theme from '../../../config/theme';

const WeekItems = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: wp(2),
        paddingVertical: wp(5),
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: '#1270B0', fontFamily: 'Rubik-Light'}}>
          01
        </Label12Light>
        <View
          style={{
            backgroundColor: 'black',
            height: wp(5),
            width: wp(5),
            borderRadius: wp(1),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: wp(2),
          }}>
          <Label12Light style={{color: '#FFFFFF', fontFamily: 'Rubik-Light'}}>
            52
          </Label12Light>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: theme.brand.primary,
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: '#FFFFFF', fontFamily: 'Rubik-Light'}}>
          Mo
        </Label12Light>

        <Label12Light
          style={{
            color: '#FFFFFF',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          27
        </Label12Light>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: '#1270B0', fontFamily: 'Rubik-Light'}}>
          Tu
        </Label12Light>

        <Label12Light
          style={{
            color: '#616161',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          28
        </Label12Light>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: '#1270B0', fontFamily: 'Rubik-Light'}}>
          We
        </Label12Light>

        <Label12Light
          style={{
            color: '#616161',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          29
        </Label12Light>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: '#1270B0', fontFamily: 'Rubik-Light'}}>
          Th
        </Label12Light>

        <Label12Light
          style={{
            color: '#616161',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          30
        </Label12Light>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: '#1270B0', fontFamily: 'Rubik-Light'}}>
          Fr
        </Label12Light>

        <Label12Light
          style={{
            color: '#616161',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          31
        </Label12Light>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: 'black', fontFamily: 'Rubik-Light'}}>
          Sa
        </Label12Light>

        <Label12Light
          style={{
            color: '#616161',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          1
        </Label12Light>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(48, 139, 133, 0.08)',
          height: wp(18),
          width: wp(9),
          borderRadius: wp(2.5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Label12Light style={{color: 'black', fontFamily: 'Rubik-Light'}}>
          Su
        </Label12Light>

        <Label12Light
          style={{
            color: '#616161',
            fontFamily: 'Rubik-Light',
            marginTop: wp(2),
          }}>
          2
        </Label12Light>
      </TouchableOpacity>
    </View>
  );
};
export default function StudentClassScreen({navigation}) {
  const ClassItem = ({title, itemStyles}) => {
    return (
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
          },
          {...itemStyles},
        ]}
        onPress={() => {
          navigation.navigate('ClassDetail', {title});
        }}>
        <Body15 style={{color: '#010101', fontFamily: 'Rubik-Light'}}>
          {title}
        </Body15>
        <Image
          style={{width: wp(6), height: wp(6)}}
          resizeMode="contain"
          source={require('../../../assets/chevron-left-black.png')}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Body15
        style={{
          color: theme.brand.primary,
          fontSize: getFontSize(28),
          fontFamily: 'Rubik-Regular',
          marginTop: wp(8),
          marginLeft: wp(8),
        }}>
        Class Schedule
      </Body15>
      <WeekItems />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Label14
          style={{
            color: '#308B85',
            marginLeft: wp(4),
            marginTop: wp(1),
            marginBottom: wp(2),
          }}>
          08:00 AM
        </Label14>
        <ClassItem
          title={'Beginner Yoga'}
          itemStyles={
            {
              // shadowColor: '#000',
              // shadowOffset: {
              //   width: 0,
              //   height: 6,
              // },
              // shadowOpacity: 0.37,
              // shadowRadius: 7.49,
              // elevation: 12,
            }
          }
        />
        <ClassItem title={'Starter class'} />
        <Label14
          style={{
            color: '#308B85',
            marginLeft: wp(4),
            marginTop: wp(4),
            marginBottom: wp(2),
          }}>
          08:00 AM
        </Label14>
        <ClassItem title={'Starter class'} />
        <ClassItem title={'Starter class'} />
        <ClassItem title={'Starter class'} />
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
