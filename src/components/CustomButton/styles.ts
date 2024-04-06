import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: scale(20),
        height: scale(20),
        marginRight: scale(20)
    }
})