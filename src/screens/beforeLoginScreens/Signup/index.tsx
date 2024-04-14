import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import Labels from '../../../localization/localization';
import {Colors, Screen} from '../../../utils';
import NormalHeader from '../../../components/NormalHeader';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {styles} from './styles';
import {Images} from '../../../assets/ImageProperties';
import NavigationService from '../../../navigation/NavigationService';

const Signup = () => {
  const navigateToLogin = () => {
    NavigationService.navigate(Screen.LOGIN);
  };
  return (
      <View style={styles.container}>
        <NormalHeader headerTitle={Labels.SIGN_UP} rightText={Labels.LOG_IN} />
        <View style={{margin: scale(15)}}>
          <Text style={styles.labelText}>{Labels.EMAIL_ADDRESS}</Text>
          <CustomTextInput placeholder={Labels.ENTER_EMAIL} />

          <View style={styles.forgotPassContainer}>
            <Text style={styles.labelText}>{Labels.PASSWORD}</Text>
          </View>

          <CustomTextInput
            placeholder={Labels.ENTER_PASSWORD}
            isPassword={true}
            isSignup={true}
            errorVisible={true}
            errorText={Labels.PASSWORD_MESSAGE}
          />

          <CustomButton
            parentStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            title={Labels.CREATE_ACCOUNT}
          />

          <View style={styles.lineContainer}>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.lineText}>Or</Text>
            <View style={styles.horizontalLine}></View>
          </View>

          <CustomButton
            parentStyle={styles.socialBtnContainer}
            textStyle={[styles.buttonText, {color: Colors.light.grey500}]}
            title={Labels.CONTINUE_GOOGLE}
            image={Images.GoogleLogo}
            isImageButton={true}
          />

          <CustomButton
            parentStyle={[
              styles.socialBtnContainer,
              {marginTop: verticalScale(15)},
            ]}
            textStyle={[styles.buttonText, {color: Colors.light.grey500}]}
            title={Labels.CONTINUE_APPLE}
            image={Images.AppleLogo}
            isImageButton={true}
          />
        </View>
        <View style={styles.newToAppContainer}>
          <Text style={styles.newToAppText}>{Labels.ALREADY_HAVE_ACCOUNT}</Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={styles.createAccountText}>{Labels.LOG_IN}</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

export default Signup;
