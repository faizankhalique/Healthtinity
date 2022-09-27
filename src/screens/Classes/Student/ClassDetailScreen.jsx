import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';

import {
  Body13,
  getFontSize,
  Label12Light,
  Label14,
} from '../../../components/AppText';
import AppHeader from '../../../components/AppHeader';
import theme from '../../../config/theme';

export default function ClassDetailScreen({navigation, route}) {
  const ClassItem = ({title, itemStyles}) => {
    const [isSelected, setSelection] = React.useState(false);
    return (
      <View
        style={[
          {
            paddingVertical: wp(7),
            paddingHorizontal: wp(6),
            // backgroundColor: 'rgba(48, 139, 133, 0.08)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: wp(2),
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1.2,
            width: wp('75%'),
            alignSelf: 'center',
          },
          {...itemStyles},
        ]}>
        <Body13 style={{color: 'black', fontFamily: 'Rubik-Regular'}}>
          {title}
        </Body13>
        <CheckBox
          boxType="square"
          value={isSelected}
          onValueChange={newValue => setSelection(newValue)}
          style={styles.checkbox}
          onCheckColor={'white'}
          tintColor={'#e6e6e6'}
          lineWidth={wp(0.3)}
          tintColors={{false: '#e6e6e6'}}
          onFillColor={'#2ab514'}
          onTintColor={'#2ab514'}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={route?.params?.title}
        containerStyles={{paddingHorizontal: wp(4), marginTop: wp(4)}}
        titleStyles={{fontSize: getFontSize(22)}}
      />
      <ScrollView style={{flex: 1, top: wp(5)}}>
        {[1, 2, 3, 4, 5, 6, 7].map(item => (
          <ClassItem key={item} title={'Trinity moore'} />
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
  checkbox: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
