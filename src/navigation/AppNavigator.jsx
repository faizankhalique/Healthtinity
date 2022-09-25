import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TeacherBottomTabNavigator from './TeacherBottomTabNavigator';
import StudentBottomTabNavigator from './StudentBottomTabNavigator';
import WelcomeScreen from '../screens/Intro/WelcomeScreen';
import WelcomeScreen2 from '../screens/Intro/WelcomeScreen2';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import TransactionHistory from '../screens/Profile/TransactionHistory';
import ManageMyCard from '../screens/Profile/ManageMyCard';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="WelcomeScreen2"
      component={WelcomeScreen2}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
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
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TransactionHistory"
      component={TransactionHistory}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ManageMyCard"
      component={ManageMyCard}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TeacherHome"
      component={TeacherBottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="StudentHome"
      component={StudentBottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
