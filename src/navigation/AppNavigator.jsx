import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from '../screens/Home/HomeScreen';
// import ChooseAudioScreen from '../screens/ChooseAudio/ChooseAudioScreen';
// import UploadClipsScreen from '../screens/UploadClips/UploadClipsScreen';
// import AdjustScreen from '../screens/Adjust/AdjustScreen';
// import DoneScreen from '../screens/Done/DoneScreen';
// import BottomTabNavigator from './BottomTabNavigator';
import WelcomeScreen from '../screens/Intro/WelcomeScreen';
import WelcomeScreen2 from '../screens/Intro/WelcomeScreen2';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import SignupScreen from '../screens/Auth/SignupScreen';
// import ProfileScreen from '../screens/Profile/ProfileScreen';
// import NotificationScreen from '../screens/Notifications/NotificationScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WelcomeScreen2"
      component={WelcomeScreen2}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
      }}
    /> */}
    
  </Stack.Navigator>
);

export default AppNavigator;
