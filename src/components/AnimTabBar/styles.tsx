import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';
import {moderateScale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: Colors.light.secondary,
    width: '100%',
    height: verticalScale(50),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  label: {
    fontFamily: Fonts.poppins500,
    fontSize: moderateScale(10),
    marginTop: verticalScale(4),
  },
  tabRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
