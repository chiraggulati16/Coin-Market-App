import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(10),
    marginTop: verticalScale(5),
  },
  rankingNo: {
    flex: 0.12,
    fontFamily: Fonts.poppins400,
    fontSize: moderateScale(11),
    color: Colors.light.grey700,
  },
  name: {
    flex: 0.8,
    fontFamily: Fonts.poppins400,
    fontSize: moderateScale(11),
    color: Colors.light.grey700,
  },
  price: {
    flex: 0.5,
    textAlign: 'right',
    fontFamily: Fonts.poppins400,
    fontSize: moderateScale(11),
    color: Colors.light.grey700,
  },
  volChange: {
    flex: 0.45,
    textAlign: 'right',
    fontFamily: Fonts.poppins400,
    fontSize: moderateScale(11),
    color: Colors.light.grey700,
  },
});
