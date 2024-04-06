import React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BeforeLoginNavigator from "./BeforeLoginNavigator";
import NavigationService from "./NavigationService";
import { useColorScheme } from 'react-native';
import AfterLoginNavigator from "./AfterLoginNavigator";

const AppNavigator = () => {

    return (
        <NavigationContainer
            ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}>
            <BeforeLoginNavigator/>
            {/* <AfterLoginNavigator/> */}
        </NavigationContainer>
    )
}

export default AppNavigator;