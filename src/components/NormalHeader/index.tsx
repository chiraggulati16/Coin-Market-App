import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Images } from "../../assets/ImageProperties";
import Labels from "../../localization/localization";
import NavigationService from "../../navigation/NavigationService";
import { Colors } from "../../utils";

const NormalHeader = () => {

    const navigateBack = () => {
        NavigationService.back();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}
            onPress={navigateBack}>
                <Image style={styles.icon}
                tintColor={Colors.light.grey700}
                    source={Images.Back} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.heading1}>{Labels.LOG_IN}</Text>
            <Text style={styles.heading2}>{Labels.SIGN_UP}</Text>
        </View>
    )
}

export default NormalHeader;