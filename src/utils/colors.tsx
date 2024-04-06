
const commonColors = {
    purple100: "#3861fb",
    red: "#ff0000"
}
export const Colors = {
    light: {
        primary: "#000000",
        secondary: "#ffffff",
        grey: "#f7f7f7",
        grey200: "#e0e0e0",
        grey300: "#cfd6e4",
        grey400: "#a6b0c3",
        grey500: "#616e85",
        grey600: "#808a9d",
        grey700: "#909090",
        ...commonColors
    },
    dark: {
        primary: "#ffffff",
        secondary: "#000000",
        ...commonColors
    }
}