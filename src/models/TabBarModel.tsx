import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageSourcePropType } from "react-native"

type TabBarModel = {
    icon : ImageSourcePropType;
    name: string;
    component: () => React.JSX.Element;
    tabOptions: Omit<BottomTabNavigationOptions, 'tabBarLabel'> & {
        tabBarLabel: string;
        tabBarVisible: boolean
    }
}

export type {TabBarModel}