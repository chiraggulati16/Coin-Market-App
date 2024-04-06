import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";


export const styles = StyleSheet.create({
    container: {
        height: scale(56),
        alignItems: "center",
        flexDirection: "row"
    },
    icon: {
        height: scale(15),
        width: scale(15),
        alignSelf: "center"
    },
    heading1: {
        fontFamily: Fonts.poppins500,
        color: "#000",
        fontSize: moderateScale(18),
        marginLeft: scale(15),
        textAlign: "center",
        includeFontPadding: false
    },
    heading2: {
        fontFamily: Fonts.poppins500,
        color: Colors.light.primary,
        fontSize: moderateScale(14),
        position: "absolute",
        right: scale(15),
        includeFontPadding: false
    },
    imageContainer: {
        marginLeft: scale(10),
        alignItems: "center"
    }
})