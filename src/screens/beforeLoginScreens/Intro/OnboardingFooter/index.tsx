import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Labels from '../../../../localization/localization';
import CustomButton from '../../../../components/CustomButton';
import NavigationService from '../../../../navigation/NavigationService';
import {Screen} from '../../../../utils';

const OnboardingFooter = ({onPress}: any) => {
  const navigateToLogin = () => {
    NavigationService.navigate(Screen.LOGIN);
  };

  const navigateToSignup = () => {
    NavigationService.navigate(Screen.SIGNUP);
  };

  const navigateToHome = () => {
    NavigationService.navigate(Screen.HOME_TAB);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          parentStyle={styles.button}
          textStyle={styles.buttonText}
          title={Labels.LOG_IN}
          onClick={navigateToLogin}
        />

        <CustomButton
          parentStyle={styles.signUpButton}
          textStyle={styles.signupButtonText}
          title={Labels.CREATE_ACCOUNT}
          onClick={navigateToSignup}
        />
      </View>

      <CustomButton
        parentStyle={styles.homeParent}
        textStyle={styles.homeButtonText}
        title={Labels.GO_TO_HOMEPAGE}
        onClick={navigateToHome}
      />
    </View>
  );
};

export default OnboardingFooter;
