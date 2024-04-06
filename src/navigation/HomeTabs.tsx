import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/afterLoginScreens/HomeScreen";
import { Images } from "../assets/ImageProperties";
import { Image } from "react-native";


const Tab = createBottomTabNavigator()


const HomeTabs = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => (
                <Image source={Images.HomeIcon} />) }} />
            
            
            <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs