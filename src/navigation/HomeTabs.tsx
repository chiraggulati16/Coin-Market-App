import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/afterLoginScreens/HomeScreen';
import {Images} from '../assets/ImageProperties';
import {Image, StyleSheet, Text, View} from 'react-native';
import Labels from '../localization/localization';
import {Colors, Fonts} from '../utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const CustomTab = ({focused, icon, label}: any) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={icon}
        tintColor={focused ? Colors.light.purple100 : Colors.light.grey400}
        style={{height: scale(18), width: scale(18)}}
      />
      <Text
        style={[
          styles.label,
          {color: focused ? Colors.light.purple100 : Colors.light.grey400},
        ]}>
        {label}
      </Text>
    </View>
  );
};
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={Labels.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              label={Labels.HOME}
              icon={Images.Home}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Labels.NEWS}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              label={Labels.NEWS}
              icon={Images.News}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Labels.SEARCH}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              label={Labels.SEARCH}
              icon={Images.Search}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Labels.PORTFOLIO}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              label={Labels.PORTFOLIO}
              icon={Images.Portfolio}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Labels.COMMUNITY}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              label={Labels.COMMUNITY}
              icon={Images.Community}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  label: {
    fontFamily: Fonts.poppins500,
    fontSize: moderateScale(10),
    marginTop: verticalScale(4),
  },
});

export default HomeTabs;
