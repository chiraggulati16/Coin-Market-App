import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/afterLoginScreens/HomeScreen';
import {Images} from '../assets/ImageProperties';
import {Image, StyleSheet, Text, View} from 'react-native';
import Labels from '../localization/localization';
import {Colors, Fonts} from '../utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { TabBarModel } from '../models/TabBarModel';
import AnimTabBar from '../components/AnimTabBar';
import { AppContext } from '../context/AppContext';
import HeaderWithSearch from '../components/HeaderWithSearch';
import GlobalMarket from '../components/GlobalMarket/GlobalMarket';
import HeaderAnimation from '../components/CustomHeaderAnim';

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  const [value, setValue] = useState(true);

  const tabs : TabBarModel[] = [
    {
      icon: Images.Home,
      name: Labels.HOME,
      component: HomeScreen,
      tabOptions: {
        tabBarLabel: Labels.HOME,
        tabBarVisible: true,
        headerShown: true,
        header: () => (
          <HeaderAnimation headerHeight={scale(112)}>
            <HeaderWithSearch headerTitle={Labels.MARKETS} />
            <GlobalMarket />
          </HeaderAnimation>
        ),
      }
    },
    {
      icon: Images.News,
      name: Labels.NEWS,
      component: HomeScreen,
      tabOptions: {
        tabBarLabel: Labels.NEWS,
        tabBarVisible: true
      }
    },
    {
      icon: Images.Search,
      name: Labels.SEARCH,
      component: HomeScreen,
      tabOptions: {
        tabBarLabel: Labels.SEARCH,
        tabBarVisible: true
      }
    },
    {
      icon: Images.Portfolio,
      name: Labels.PORTFOLIO,
      component: HomeScreen,
      tabOptions: {
        tabBarLabel: Labels.PORTFOLIO,
        tabBarVisible: true
      }
    },
    {
      icon: Images.Community,
      name: Labels.COMMUNITY,
      component: HomeScreen,
      tabOptions: {
        tabBarLabel: Labels.COMMUNITY,
        tabBarVisible: true
      }
    }
  ]
  return (
    <AppContext.Provider value={{value, setValue}}>
    <Tab.Navigator
    id='tabs'
    tabBar={(props) => (
      <AnimTabBar {...props} tabs={tabs}/>
    )}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
     {
      tabs.map((tab, index) => (
        <Tab.Screen key={index} name={tab.name} options={tab.tabOptions}>
          {()=> tab.component()}
        </Tab.Screen>
      ))
     }
    </Tab.Navigator>
    </AppContext.Provider>
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
