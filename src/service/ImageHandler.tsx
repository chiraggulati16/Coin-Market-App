import {Image, View} from 'react-native';
import React from 'react';
import {SvgCssUri} from 'react-native-svg/css';
import {ApiUrl} from './apiConfig';
import { scale } from 'react-native-size-matters';
import { Colors } from '../utils';

type ImageHandlerProps = {
  urlSuffix: string | undefined | null;
  styling?: any;
};

const ImageHandler = ({urlSuffix, styling}: ImageHandlerProps) => {
  //.svg its an svg image use MEDIA_BE_URL <SvgUri uri={URI} />
  console.log(`${ApiUrl.homeSvgUrl}/${urlSuffix}`)
  const extension = urlSuffix?.split('.').pop();
  switch (extension) {
    case 'svg':
      return (
        <View style={styling}>
          <SvgCssUri
            uri={`${ApiUrl.homeSvgUrl}/${urlSuffix}`}
            width={"60"}
            height={"30"}
            stroke={Colors.light.red}
            fill={Colors.light.red}
            color={Colors.light.red}
          />
        </View>
      );
    case 'png':
      return (
        <View
          style={[
            {display: 'flex', justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Image
            source={{uri: `${ApiUrl.iconUrl}/${urlSuffix}`}}
            style={styling}
            resizeMode="contain"
          />
        </View>
      );
    default:
      return (
        <View
          style={[
            styling,
            {display: 'flex', justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Image source={{uri: `${ApiUrl.iconUrl}${urlSuffix}`}} />
        </View>
      );
  }
};

export {ImageHandler};
