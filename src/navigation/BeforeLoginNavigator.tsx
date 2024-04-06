import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/beforeLoginScreens/Intro";
import Login from "../screens/beforeLoginScreens/Login";
import { Screen } from "../utils/screens";
import Signup from "../screens/beforeLoginScreens/Signup";

const BeforeLoginStack = createNativeStackNavigator();


const BeforeLoginNavigator = () => {

    return (
        <BeforeLoginStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <BeforeLoginStack.Screen name={Screen.ONBOARDING} component={Intro} />
            <BeforeLoginStack.Screen name={Screen.LOGIN} component={Login} />
            <BeforeLoginStack.Screen name={Screen.SIGNUP} component={Signup} />
        </BeforeLoginStack.Navigator>
    )
}

export default BeforeLoginNavigator;