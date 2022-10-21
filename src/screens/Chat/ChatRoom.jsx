import {
  StyleSheet,
  Platform,
  Image,
  TextInput,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Body14, Label11Light} from '../../components/AppText';
import theme from '../../config/theme';
import AppTextInput from '../../components/AppTextInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';

export default function ChatRoom() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [messages, setMessages] = React.useState(['hi,']);
  const [message, setMessage] = React.useState('');
  const handlePress = () => {
    let m = [...messages, message];
    setMessages(m);
    setMessage('');
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: theme.brand.primary,
          height: Platform.OS === 'ios' ? wp(25) : wp(18),
          paddingHorizontal: wp(4),
          //   justifyContent: 'center',
        }}>
        <AppHeader
          title={'Chat Room'}
          isWhite
          containerStyles={{
            marginTop: Platform.OS === 'ios' ? statusBarHeight : wp(5),
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: wp(4),

          backgroundColor: theme.ui.backgroundWhite,
          position: 'relative',
          // paddingBottom: wp(40),
        }}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: wp(8),
              width: wp('80%'),
              minHeight: wp(20),
              justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: 'rgba(38,50,56,255)',
              borderRadius: wp(4),
              paddingHorizontal: wp(4),
            }}>
            <Image
              source={require('../../assets/p1.png')}
              style={{
                position: 'absolute',
                top: wp(-6),
                left: wp(-3),
                height: wp(8),
                width: wp(8),
              }}
              resizeMode="contain"
            />
            <Body14 style={{}}>Hello, How may we help you ?</Body14>
          </View>
          {messages.map((m, i) => (
            <View
              key={i}
              style={{
                width: wp('80%'),
                minHeight: wp(20),
                marginTop: wp(5),
                alignSelf: 'flex-end',
                borderRadius: wp(4),
                justifyContent: 'center',
                paddingHorizontal: wp(4),
                backgroundColor: theme.brand.primary,
              }}>
              <Image
                source={require('../../assets/P2.png')}
                style={{
                  position: 'absolute',
                  top: wp(-8.2),
                  right: wp(-5.5),
                  height: wp(11),
                  width: wp(11),
                }}
                resizeMode="contain"
              />
              <Body14>{m}</Body14>
            </View>
          ))}
          <View style={{paddingBottom: wp(30)}} />
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            bottom: 20,
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: wp(14),
            width: '95%',
            borderRadius: wp(4),
            paddingHorizontal: wp(3),
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <Image
            source={require('../../assets/smile.png')}
            style={{
              height: wp(6),
              width: wp(6),
            }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Message"
            value={message}
            placeholderTextColor={'#B3B3B3'}
            style={{
              flex: 1,
              height: wp(12),
              width: '100%',
              marginLeft: wp(4),
            }}
            onChangeText={t => setMessage(t)}
          />
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require('../../assets/send-icon.png')}
              style={{
                height: wp(9),
                width: wp(9),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
