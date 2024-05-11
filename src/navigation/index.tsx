import React, {useEffect} from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import BeforeLoginNavigator from './BeforeLoginNavigator';
import NavigationService from './NavigationService';
import AfterLoginNavigator from './AfterLoginNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../models';
import {setUserData} from '../redux/slices/auth';
import { getItem } from '../service/AsyncStoreConfig';

const AppNavigator = () => {
  const authState = useSelector((state: State) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    settingUserData();
  }, []);

  const settingUserData = async () => {
    let saveUser = await getItem('userData');
    if (saveUser) {
      dispatch(setUserData(JSON.parse(saveUser)));
    } else {
      dispatch(setUserData(null));
    }
  };
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      {!authState?.userData ? <BeforeLoginNavigator /> : <AfterLoginNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
