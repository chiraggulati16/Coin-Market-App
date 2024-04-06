import { Dimensions, Platform, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";


export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height - verticalScale(200),
        width: Dimensions.get("window").width,
        alignItems: "center",
    },
    heading: {
        color: Colors.light.primary,
        fontSize: moderateScale(22),
        fontFamily: Fonts.poppins600,
        textAlign: "center",
        marginTop: verticalScale(20),
        lineHeight: verticalScale(28),
        marginHorizontal: scale(20)
    },
    description: {
        color: Colors.light.grey600,
        fontSize: moderateScale(14),
        textAlign: "center",
        marginTop: verticalScale(15),
        lineHeight: verticalScale(18),
        marginHorizontal: scale(30)
    },
    image: {
        width: scale(70),
        height: scale(70),
        marginTop: verticalScale(150),

    },
    lottieView: {
        width: scale(Platform.OS == "android" ? 330 : 300),
        height: scale(Platform.OS == "android" ? 330 : 300),
    }
})