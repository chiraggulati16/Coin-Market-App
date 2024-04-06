import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import Labels from '../../../localization/localization';
import {Colors, Screen} from '../../../utils';
import NormalHeader from '../../../components/NormalHeader';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {styles} from './styles';
import {Images} from '../../../assets/ImageProperties';
import NavigationService from '../../../navigation/NavigationService';

const Login = () => {
  const navigateToSignup = () => {
    NavigationService.navigate(Screen.SIGNUP);
  };
  return (
    <View style={styles.container}>
      <NormalHeader />
      <View style={{margin: scale(15)}}>
        <Text style={styles.labelText}>{Labels.EMAIL_ADDRESS}</Text>
        <CustomTextInput placeholder={Labels.ENTER_EMAIL} />
        <View style={styles.forgotPassContainer}>
          <Text style={styles.labelText}>{Labels.PASSWORD}</Text>
          <Text style={[styles.labelText, {color: Colors.light.grey500}]}>
            {Labels.FORGOT_PASSWORD}
          </Text>
        </View>

        <CustomTextInput
          placeholder={Labels.ENTER_PASSWORD}
          isPassword={true}
        />

        <CustomButton
          parentStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          title={Labels.LOG_IN}/>

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
        <Text style={styles.newToAppText}>{Labels.NEW_TO_APP}</Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.createAccountText}>{Labels.CREATE_ACCOUNT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;