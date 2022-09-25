import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppHeader from '../../components/AppHeader';
import {Label12Light} from '../../components/AppText';
import theme from '../../config/theme';

export default function TransactionHistory() {
  return (
    <View style={styles.container}>
      <AppHeader title={'Transaction History'} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Label12Light style={{color: theme.brand.primary}}>
          No Transaction Made Yet
        </Label12Light>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(5),
    paddingHorizontal: wp(4),
  },
});
