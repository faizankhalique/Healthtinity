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
import ClassDetailScreen from '../screens/Classes/Student/ClassDetailScreen';
import PackageDescriptionScreen from '../screens/Package/PackageDescriptionScreen';
import PackageSelectionScreen from '../screens/Package/PackageSelectionScreen';
import TermsAndConditionsScreen from '../screens/Package/TermsAndConditionsScreen';
import PaymentSuccessScreen from '../screens/Package/PaymentSuccessScreen';
import ClassHistory from '../screens/Classes/Teacher/ClassHistory';
import WaitlistScreen from '../screens/Classes/Teacher/WaitlistScreen';
import BookingScreen from '../screens/Classes/Teacher/BookingScreen';
import ProductsScreen from '../screens/Merchandise/ProductsScreen';
import ProductDetailsScreen from '../screens/Merchandise/ProductDetailsScreen';
import MyCartScreen from '../screens/Merchandise/MyCartScreen';
import CheckoutScreen from '../screens/Merchandise/CheckoutScreen';
import ChatRoom from '../screens/Chat/ChatRoom';
import NewLeaveScreen from '../screens/Leave/NewLeave';
import PaymentSuccessScreen2 from '../screens/Merchandise/PaymentSuccessScreen2';

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
    <Stack.Screen
      name="ClassDetail"
      component={ClassDetailScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PackageDescription"
      component={PackageDescriptionScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PackageSelection"
      component={PackageSelectionScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TermsAndConditions"
      component={TermsAndConditionsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PaymentSuccess"
      component={PaymentSuccessScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PaymentSuccess2"
      component={PaymentSuccessScreen2}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ClassHistory"
      component={ClassHistory}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Waitlist"
      component={WaitlistScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="BookingScreen"
      component={BookingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProductsScreen"
      component={ProductsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProductDestail"
      component={ProductDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MyCart"
      component={MyCartScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ChatRoom"
      component={ChatRoom}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="NewLeave"
      component={NewLeaveScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
