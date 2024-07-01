import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import {Screen} from '../utils';
import HomeDetails from '../screens/afterLoginScreens/HomeDetails';

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => {
  return (
    <AfterLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AfterLoginStack.Screen
        options={{
          headerShown: false,
        }}
        name={Screen.HOME_TAB}
        component={HomeTabs}
      />
      <AfterLoginStack.Screen
        name={Screen.HOME_DETAILS}
        component={HomeDetails}
      />
    </AfterLoginStack.Navigator>
  );
};

export default AfterLoginNavigator;
