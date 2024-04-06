import React from "react";
import { Image, ImageSourcePropType, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface CustomButtonProps {
    title: string;
    isImageButton?: boolean;
    onClick?: () => void;
    textStyle: TextStyle | TextStyle[];
    parentStyle: ViewStyle | ViewStyle[]
    image?: ImageSourcePropType
}

/**
 * 
 * @param title - represent the button title
 * @param parentStyle - represent the style given to the TouchableOpacity
 * @param isImageButton - use to render image based on value true or false
 * @param textStyle - use to set style of title text
 * @param image - represents the path of image to be displayed
 * @param onClick - used to handle click of button
 * 
 **/
const CustomButton = ({
    title,
    parentStyle,
    textStyle,
    image,
    isImageButton = false,
    onClick

}: CustomButtonProps) => {

    return (
        <TouchableOpacity style={parentStyle}
            onPress={onClick}>
            <View style={styles.container}>
                {isImageButton &&
                    <Image
                        resizeMode="contain"
                        style={styles.image} source={image} />
                }
                <Text style={textStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CustomButton;