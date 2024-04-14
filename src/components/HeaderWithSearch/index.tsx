import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {HeaderProps} from '../../models';
import { Colors } from '../../utils';
import { Images } from '../../assets/ImageProperties';

/**
 *
 * @param headerTitle - used to show title of header
 *
 **/
const HeaderWithSearch = ({headerTitle}: HeaderProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>{headerTitle}</Text>
      <View style={styles.rightIconContainer}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={Images.Diamond}
          resizeMode="contain"
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={styles.icon}
          tintColor={Colors.light.grey700}
          source={Images.Search}
          resizeMode="contain"
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={styles.icon}
          tintColor={Colors.light.grey700}
          source={Images.User}
          resizeMode="contain"
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderWithSearch;
