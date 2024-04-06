import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./HomeTabs";
import { Screen } from "../utils";

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => {

    return (
        <AfterLoginStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <AfterLoginStack.Screen name={Screen.HOME_TAB} component={HomeTabs} />
        </AfterLoginStack.Navigator>
    )
}

export default AfterLoginNavigator