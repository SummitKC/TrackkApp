import { useWindowDimensions } from "react-native";

/* 

    This file contains the styles for the navigation bar.
    The styles are responsive and change according to the current width and height of the screen. 
    Width and Height are obtained using the useWindowDimensions hook from react-native.
    And processed to be 8% and 25% of the screen respectively. 
    The text size is also responsive and changes according to the width of the screen.
    The colors for the active and inactive tabs are defined here.

*/


export const useNavBarStyles = () => {
    const { width, height } = useWindowDimensions();
    const textSize = width < 380 ? "text-[10px]" : "text-xs";
    const navBarHeight = Math.ceil(height * 0.08);
    const navBarWidth = Math.ceil(width * 0.25);

    return {
        containerClass: "flex-row w-full bg-[#f8f8f8] justify-center items-center px-4",
        containerStyle: { height: navBarHeight },
        textClass: `${textSize} font-bold items-center justify-center`,
        iconClass: "text-lg font-bold items-center justify-center",
        iconStyle: { width: navBarWidth },
        divider: "h-[1px] bg-[#e0e0e0] w-full",
        verticalDivider: "w-[1px] bg-[#e0e0e0] h-full"
    };
}

export const navBarColors = {

    active: "#3498db",
    inactive: "#8e8e8e"
    
}