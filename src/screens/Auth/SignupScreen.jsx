import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';

import {
  Label19,
  Label12Light,
  Label11Light,
  Label14,
  Label8Light,
} from '../../components/AppText';
import theme from '../../config/theme';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import {isValidEmail, isValidVassword} from '../../helpers/utilHelper';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSelected, setSelection] = useState(false);

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
    } else if (!isValidVassword(password)) {
      setError(
        'Use more than 8 character including letters,numbers and symbols',
      );
      return;
    } else {
      setEmail('');
      setPassword('');
      setError('');
      navigation.navigate('EditProfile', {LoginScreen: true});
    }
  };
  return (
    <View style={styles.container}>
      <Label19 style={styles.SignUpLabel}>Sign Up</Label19>
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
        {error && <Label8Light style={{color: '#DC1D1D'}}>{error}</Label8Light>}
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          boxType="square"
          value={isSelected}
          onValueChange={newValue => setSelection(newValue)}
          style={styles.checkbox}
          onCheckColor={'white'}
          tintColor={theme.custom.green}
          lineWidth={wp(0.3)}
          tintColors={{false: 'black'}}
          onFillColor={theme.custom.green}
          onTintColor={theme.custom.green}
        />
        <Label12Light style={styles.label}>
          I agree to the Terms and Privacy Policy
        </Label12Light>
      </View>
      <AppButton onPress={handleSubmit} title={'Sign Up'} buttonStyles={{}} />
      <Label12Light style={{alignSelf: 'center', marginTop: wp(2)}}>
        or
      </Label12Light>
      <AppButton
        onPress={() => {}}
        image={require('../../assets/facebook.png')}
        title={'Sign Up with FaceBook'}
        buttonStyles={{marginVertical: wp(6)}}
      />
      <AppButton
        onPress={() => {}}
        image={require('../../assets/apple.png')}
        title={'Sign Up with Apple'}
        buttonStyles={{marginVertical: wp(4)}}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Label12Light>Already Have acccount ?</Label12Light>
        <TouchableOpacity style={{left: wp(2)}}>
          <Label14>Log In</Label14>
        </TouchableOpacity>
      </View>
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
    // fontFamily: 'Rubik-bo',
    alignSelf: 'center',
    color: theme.custom.green,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    marginBottom: wp(6),
  },
  checkbox: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
  label: {
    left: 8,
    color: theme.custom.green,
  },
  forgotPasswordlabel: {
    color: '#F83C3C',
  },
});
