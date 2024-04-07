import { Dimensions, Platform, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../../../../utils";

export const styles = StyleSheet.create({
    container: {
        height: verticalScale(120),
        width: Dimensions.get("window").width,
        marginTop: verticalScale(10)
        
    },
    buttonContainer: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: scale(20),
    },
    button: {
        flex: 0.25,
        height: verticalScale(Platform.OS === "android" ? 45 : 40),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
      signUpButton: {
        flex: 0.65,
        height: verticalScale(Platform.OS === "android" ? 45 : 40),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: Colors.light.purple100,
        color: Colors.light.secondary,
        padding: 10,
      },
      buttonText: {
        color: Colors.light.primary,
        fontFamily: Fonts.poppins500
      },
      homeParent: {
        alignSelf: "center", 
        marginBottom: verticalScale(20)
      },
      homeButtonText: {
        fontFamily: Fonts.poppins500,
        color: Colors.light.grey500,
      },
      signupButtonText: { 
        fontFamily: Fonts.poppins500,
        color: Colors.light.secondary
      }
})