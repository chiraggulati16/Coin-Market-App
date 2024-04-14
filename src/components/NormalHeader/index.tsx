import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Images} from '../../assets/ImageProperties';
import NavigationService from '../../navigation/NavigationService';
import {Colors} from '../../utils';
import {HeaderProps} from '../../models';

/**
 *
 * @param headerTitle - used to show title of header
 * @param rightText - used to right corner text in header
 *
 **/
const NormalHeader = ({headerTitle, rightText}: HeaderProps) => {
  const navigateBack = () => {
    NavigationService.back();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={navigateBack}>
        <Image
          style={styles.icon}
          tintColor={Colors.light.grey700}
          source={Images.Back}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.heading1}>{headerTitle}</Text>
      <Text style={styles.heading2}>{rightText}</Text>
    </View>
  );
};

export default NormalHeader;
