import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../../../utils';

export const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScale(300),
    flex: 1,
    marginHorizontal: scale(10),
    backgroundColor: Colors.light.secondary,
    borderRadius: scale(5),
    marginTop: moderateScale(4),
    marginBottom: moderateScale(4),
    alignItems: "center"
  },
  poster: {
    height: moderateScale(150),
    width: "90%",
    borderRadius: scale(5),
    marginTop: scale(10)
  },
  title: {
    fontFamily: Fonts.poppins600,
    color: Colors.light.primary,
    marginHorizontal: scale(16),
    marginTop: moderateScale(10),
    textAlign: "left",
    alignSelf: "flex-start"
  },
  logo: {
    width: scale(40),
    height: scale(40),
    tintColor: Colors.light.primary
  },
  logoBg: {
    height: moderateScale(150),
    backgroundColor: Colors.light.grey,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: scale(10),
    borderRadius: scale(5),
  },
  datePost: {
    position: "absolute",
    bottom: moderateScale(20),
    right: scale(14),
    fontFamily: Fonts.poppins400,
    fontSize: moderateScale(11),
    color: Colors.light.grey500
  },
  desc: {
    fontFamily: Fonts.poppins400,
    color: Colors.light.grey500,
    marginHorizontal: scale(16),
    marginTop: moderateScale(2),
    textAlign: "left",
    alignSelf: "flex-start"
  },
});
