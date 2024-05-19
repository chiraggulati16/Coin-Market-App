import {Image, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {SvgCssUri} from 'react-native-svg/css';
import {ApiUrl} from './apiConfig';
import {Colors} from '../utils';
import { SvgXml } from 'react-native-svg';

type ImageHandlerProps = {
  urlSuffix: string | undefined | null;
  styling?: any;
  profit? : boolean
};

const ImageHandler = ({urlSuffix, styling, profit = false}: ImageHandlerProps) => {
  //.svg its an svg image use MEDIA_BE_URL <SvgUri uri={URI} />
  const extension = urlSuffix?.split('.').pop();
  const [imgXml, setImgXml] = useState('<svg></svg>');

  useEffect(() => {
    if(extension == 'svg') {
      getImgXml();
    }
  }, []);

  const getImgXml = async () => {
    const xml = await (await fetch(`${ApiUrl.homeSvgUrl}/${urlSuffix}`)).text();
    let newXml = "";
    if(profit) {
      newXml = xml.replaceAll("stroke:rgb(237,194,64)", `stroke:${Colors.light.red}`);
    }
    else {
      newXml = xml.replaceAll("stroke:rgb(237,194,64)", `stroke:${Colors.light.green}`)
    }
    setImgXml(newXml);
  };

  switch (extension) {
    case 'svg':
      return (
        <View style={styling}>
          <SvgXml
            xml={imgXml}
            width={'60'}
            height={'30'}
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
