import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import Labels from '../../localization/localization';
import {Images} from '../../assets/ImageProperties';
import {Colors, Fonts} from '../../utils';
import Circle from '../CircularProgress';
import {moderateScale, scale} from 'react-native-size-matters';

const GlobalMarket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.headingText}>{Labels.MARKET_CAP}</Text>
        <Text style={styles.priceText}>$ 2.36 T</Text>
        <View style={styles.percentContainer}>
          <Image
            source={Images.UpArrow}
            style={styles.icon}
            resizeMode="contain"
            tintColor={Colors.light.green}
          />
          <Text style={styles.percentText}>2.03%</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.childContainer}>
        <Text style={styles.headingText}>{Labels.VOLUME}</Text>
        <Text style={styles.priceText}>$ 77.23 B</Text>
        <View style={styles.percentContainer}>
          <Image
            source={Images.DownArrow}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.percentText,
              {
                color: Colors.light.red,
              },
            ]}>
            23.22%
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.childContainer}>
        <Text style={styles.headingText}>{Labels.DOMINANCE}</Text>
        <Text style={styles.priceText}>$ 2.36 T</Text>
        <View style={styles.percentContainer}>
          <Image
            source={Images.UpArrow}
            style={styles.icon}
            resizeMode="contain"
            tintColor={Colors.light.green}
          />
          <Text style={styles.percentText}>2.03%</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.childContainer}>
        <Circle
          size={scale(38)} // Specify the size of the circle
          fill={70} // Specify the fill percentage
          rotation={225}
          arcSweepAngle={270}
          width={6} // Specify the width of the stroke
          backgroundColor="lightgray" // Specify the background color
          tintColor="transparent" // Specify the color of the fill
          children={fill => <Text style={{fontSize: moderateScale(13), fontFamily: Fonts.poppins600}}>{`${70}`}</Text>} // Optionally provide children
        />
      </View>
    </View>
  );
};
export default GlobalMarket;
