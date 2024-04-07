import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../../../utils";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#F7F7F7" 
    },
    buttonContainer: {
        height: verticalScale(45),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: Colors.light.purple100,
        color: Colors.light.secondary,
        padding: 10,
        marginTop: verticalScale(30)
    },
    buttonText: {
        fontFamily: Fonts.poppins700,
        color: Colors.light.secondary
    },
    forgotPassContainer: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginVertical: verticalScale(10), 
        marginTop: verticalScale(23) 
    },
    labelText: { 
        fontFamily: Fonts.poppins500, 
        color: Colors.light.primary,
        fontSize: moderateScale(12)
    },
    lineContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginTop: verticalScale(30)
    },
    horizontalLine: {
        backgroundColor: Colors.light.grey300, 
        height: verticalScale(1), 
        flex: 1
    },
    lineText: {
        color: Colors.light.grey400, 
        marginHorizontal: scale(20)
    },

    socialBtnContainer: {
        height: verticalScale(45),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: Colors.light.grey300,
        borderWidth: scale(1),
        color: Colors.light.secondary,
        padding: 10,
        marginTop: verticalScale(30)
    },
    newToAppText: {
        fontFamily: Fonts.poppins400,
        color: Colors.light.grey500, 
        fontSize: moderateScale(12), 
    },
    createAccountText: {
        fontFamily: Fonts.poppins500,
        color: Colors.light.primary, 
        fontSize: moderateScale(12)
    },
    newToAppContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        bottom: verticalScale(20), 
        position: "absolute", 
        left: 0,
        right: 0
    }
})