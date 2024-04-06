import { Dimensions, Platform, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        height: verticalScale(120),
        width: Dimensions.get("window").width,
        
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
        backgroundColor: "#3861fb",
        color:"#fff",
        padding: 10,
      },
      buttonText: {
        color: "#000",
        fontWeight: "600"
      },
      homeParent: {
        alignSelf: "center", 
        marginBottom: verticalScale(20)
      },
      homeButtonText: {
        fontWeight:"bold",
        color: "#000"
      },
      signupButtonText: { 
        fontWeight: "bold", 
        color: "#fff" 
      }
})