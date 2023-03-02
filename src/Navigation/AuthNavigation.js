import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, AppStyles} from '../Themes';
import {
  Signin,
  Signup,
  CheckEmail,
  CompleteRegistration,
  RegistrationConfirm,
} from '../Containers/AuthFlow';
import {HeaderBackIcon} from '../Components/HeaderBackIcon';
const HeaderTintColor = Colors.appColor1;

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        title: 'Auth',
        headerTitleAlign: 'center',
        headerStyle: AppStyles.headerStyle,
        headerTitleStyle: AppStyles.headerTitleStyle,
        headerTintColor: HeaderTintColor,
        headerBackImage: () => <HeaderBackIcon />,
      }}
      initialRouteName="register">
      <AuthStack.Screen
        name="signin"
        component={Signin}
        options={
          {
            //headerShown: false,
            //title: 'Auth'
          }
        }
      />
      <AuthStack.Screen
        name="signup"
        component={Signup}
        options={{
          //headerShown: false,
          title: '',
        }}
      />
      <AuthStack.Screen
        name="checkEmail"
        component={CheckEmail}
        options={{
          // headerShown: true,
          title: '',
        }}
      />
      <AuthStack.Screen
        name="completeRegistration"
        component={CompleteRegistration}
        options={
          {
            //headerShown: false,
            //title: 'Auth'
          }
        }
      />
      <AuthStack.Screen
        name="registrationConfirm"
        component={RegistrationConfirm}
        options={
          {
            //headerShown: false,
            //title: 'Auth'
          }
        }
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
