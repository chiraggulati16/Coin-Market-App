import React, { useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Images} from '../../assets/ImageProperties';
import {Colors} from '../../utils';

interface CustomTextInputProps {
  errorVisible?: boolean;
  errorText?: string;
  placeholder: string;
  isPassword?: boolean;
  isSignup?: boolean;
}
/**
 * 
 * @param errorVisible - used to show or hide error
 * @param errorText - used to display error message
 * @param placeholder - used to display placeholder text of input
 * @param isPassword - used to show eye icon and used to behave input as password field
 * @param isSignup - used to display password criteria message in signup form
 * 
 **/
const CustomTextInput = ({
  errorVisible = false,
  errorText = '',
  placeholder = '',
  isPassword = false,
  isSignup = false,
}: CustomTextInputProps) => {

  const [showPassword, setShowPassword] = useState(isPassword)
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={showPassword}
          numberOfLines={1}
          style={styles.textInput}
          placeholderTextColor={Colors.light.grey400}
        />
        {isPassword && (
          <TouchableOpacity onPress={()=>{
            setShowPassword(!showPassword)
          }}>
            <Image
              tintColor={Colors.light.grey400}
              style={styles.icon}
              source={!showPassword? Images.ShowPassowrd : Images.HidePassword}
            />
          </TouchableOpacity>
        )}
      </View>
      {isSignup && errorVisible && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
