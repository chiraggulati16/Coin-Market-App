import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";


export const styles = StyleSheet.create({
    container: {
        height: scale(56),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5,
        shadowColor: Colors.light.primary,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: scale(2),
        backgroundColor: Colors.light.secondary,
        marginHorizontal: scale(10),
        borderRadius: scale(8)
    },
    childContainer: {
        flex: 1,
        alignItems: "center"
    },
    percentContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        width: scale(8),
        height: scale(8)
    },
    percentText: {
        fontSize: moderateScale(10),
        marginLeft: scale(5),
        color: Colors.light.green,
        fontFamily: Fonts.poppins400
    },
    headingText: {
        fontSize: moderateScale(10),
        fontFamily: Fonts.poppins400,
        color: Colors.light.grey500
    },
    priceText: {
        fontSize: moderateScale(13),
        fontFamily: Fonts.poppins600,
        color: Colors.light.primary
    },
    divider: {
        width: scale(1),
        backgroundColor: Colors.light.grey,
        height: "100%"
    }
})