import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";


export const styles = StyleSheet.create({
    container: {
        height: scale(56),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        height: scale(18),
        width: scale(18),
        alignSelf: "center"
    },
    heading1: {
        fontFamily: Fonts.poppins600,
        color: "#000",
        fontSize: moderateScale(18),
        marginLeft: scale(15),
        textAlign: "center",
        includeFontPadding: false
    },
    imageContainer: {
        marginHorizontal: scale(8),
        alignItems: "center"
    },
    rightIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: scale(5)
    }
})