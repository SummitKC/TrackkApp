import { useWindowDimensions } from "react-native";

export const summaryStyles = () => {

    const { width, height } = useWindowDimensions();
    const textSize = width < 380 ? "text-[10px]" : "text-xs";
    const summaryHeight = Math.ceil(height * 0.26);
    const summaryWidth = Math.ceil(width * 0.90);

    return {

        mainClass: "flex-1 justify-top items-center bg-transparent",
        summaryClass: "flex-row justify-center items-center bg-purple-500 rounded-lg margin-top-10",
        summaryStyle: { height: summaryHeight, width: summaryWidth },

    };



}