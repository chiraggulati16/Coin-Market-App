import { ImageSourcePropType } from "react-native";

export interface IntroDataModel {
    icon: ImageSourcePropType | any;
    heading: string;
    description: string;
    type: number;
}