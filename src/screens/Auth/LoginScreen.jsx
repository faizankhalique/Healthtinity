import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';

import {Label19, Label8Light, Label11Light} from '../../components/AppText';
import theme from '../../config/theme';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import {isValidEmail} from '../../helpers/utilHelper';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email) {
      setError('Please enter email');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter valid email');
      return;
    } else if (!password) {
      setError('Please enter Password');
      return;
    } else {
      if (email === 'student@gmail.com') {
        navigation.navigate('StudentHome', {});
      } else {
        navigation.navigate('TeacherHome', {});
      }
      setEmail('');
      setPassword('');
      setError('');
    }
  };
  return (
    <View style={styles.container}>
      <Label19 style={styles.SignUpLabel}>Sign In</Label19>
      <View style={{paddingVertical: wp(20)}}>
        <AppTextInput
          placeholder={'Email'}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          autoCorrect={false}
          value={email}
          onChangeText={v => {
            setEmail(v);
            setError('');
          }}
        />
        <AppTextInput
          placeholder={'Password'}
          autoCapitalize={'none'}
          autoCorrect={false}
          password
          value={password}
          onChangeText={v => {
            setPassword(v);
            setError('');
          }}
        />
        {error && (
          <Label8Light style={{color: '#DC1D1D', marginBottom: wp(2)}}>
            {error}
          </Label8Light>
        )}
        <View style={styles.checkboxContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              boxType="square"
              value={isSelected}
              onValueChange={newValue => setSelection(newValue)}
              style={styles.checkbox}
              onCheckColor={'white'}
              tintColor={'black'}
              lineWidth={wp(0.3)}
              tintColors={{false: 'black'}}
              onFillColor={theme.custom.green}
              onTintColor={theme.custom.green}
            />
            <Label11Light style={styles.label}>Remember me</Label11Light>
          </View>
          <Label11Light style={styles.forgotPasswordlabel}>
            Forgot password ?
          </Label11Light>
        </View>
      </View>
      <AppButton onPress={handleSubmit} title={'Log In'} buttonStyles={{}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: theme.ui.backgroundWhite,
    paddingTop: wp(25),
    paddingHorizontal: wp(4),
  },
  SignUpLabel: {
    fontFamily: 'Rubik-Regular',
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
  },
  checkbox: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
  label: {
    left: 8,
  },
  forgotPasswordlabel: {
    color: '#F83C3C',
  },
});
