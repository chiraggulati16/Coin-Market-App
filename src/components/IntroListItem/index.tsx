import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Colors} from '../../utils';
import {IntroDataModel} from '../../models';

interface IntroListItemProps {
  data: IntroDataModel;
}
const IntroListItem = (props: IntroListItemProps) => {
  return (
    <View style={styles.container}>
      {props?.data?.type == 0 ? (
        <Image
          style={styles.image}
          source={props?.data?.icon}
          tintColor={Colors.light.primary}
          resizeMode="cover"
        />
      ) : (
        <LottieView
          style={styles.lottieView}
          source={props?.data?.icon}
          autoPlay
          loop
        />
      )}
      <Text numberOfLines={2} style={styles.heading}>
        {props?.data?.heading}
      </Text>
      <Text style={styles.description}>{props?.data?.description}</Text>
    </View>
  );
};

export default IntroListItem;
