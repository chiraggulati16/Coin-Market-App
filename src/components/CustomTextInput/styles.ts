import { Platform, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";

export const styles = StyleSheet.create({
    container : {
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: scale(15),
        flexDirection: "row",
        borderRadius: scale(7), 
        borderColor: Colors.light.grey300, 
        height: verticalScale(Platform.OS === "android" ? 45 : 40), 
        borderWidth: scale(1),
        marginTop: verticalScale(5)
    },

    textInput: {
        color: Colors.light.primary, 
        fontFamily: Fonts.poppins400, 
        maxWidth: scale(250),
        minWidth: scale(190)
    },

    icon: {
        height: scale(15), 
        width: scale(15)
    },
    errorText: {
        color: Colors.light.red, 
        fontFamily: Fonts.poppins500, 
        fontSize: moderateScale(12), 
        marginTop: verticalScale(7)
    }
})