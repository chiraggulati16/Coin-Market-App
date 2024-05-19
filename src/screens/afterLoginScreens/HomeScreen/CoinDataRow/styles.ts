import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Colors, Fonts } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(10),
    marginTop: verticalScale(10),
  },
  rankingNo: {
    flex: 0.12,
    fontFamily: Fonts.poppins400,
    fontSize: moderateScale(13),
    marginLeft: scale(5)
  },
  nameContainer: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: Fonts.poppins500,
    fontSize: moderateScale(13),
  },
  marketCap: {
    fontFamily: Fonts.poppins500,
    fontSize: moderateScale(13),
    marginTop: verticalScale(3),
    color: Colors.light.grey500
  },
  icon: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(20)
  },
  price: {
    flex: 0.5,
    textAlign: 'right',
    fontFamily: Fonts.poppins500,
    fontSize: moderateScale(13),
    marginRight: scale(15)
  },
  volChange: {
    textAlign: 'right',
    fontFamily: Fonts.poppins500,
    fontSize: moderateScale(11),
  },
  symbolContainer: {
    marginLeft: scale(8)
  },
  volChangeContainer: {
    flex: 0.45,
    justifyContent: "center",
    marginRight: scale(5)
  },
  iconSvg: {
   alignSelf: "flex-end",
   resizeMode: "contain"
  },
  profitIcon: {
    width: scale(7),
    height: scale(7),
    marginRight: scale(4)
  },
  profitContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
