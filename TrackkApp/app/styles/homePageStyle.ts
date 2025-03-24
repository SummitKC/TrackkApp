import { useWindowDimensions } from "react-native";

export const summaryStyles = () => {

    const { width, height } = useWindowDimensions();
    const textSize = width < 380 ? "text-[10px]" : "text-xs";
    const summaryHeight = Math.ceil(height * 0.26);
    const summaryWidth = Math.ceil(width * 0.90);
    const summarySVGH = Math.ceil(summaryHeight * 0.90);
    const summarySVGW = Math.ceil(summaryWidth * 0.90);
    const barHeight = Math.ceil(summarySVGH * 0.33);

    return {

        mainContainer: "flex-1 justify-top items-center bg-transparent",
        subContainerLeft: "flex w-2/5 h-full items-center justify-center bg-blue-500",
        subContainerRight: "flex w-3/5 h-full items-center justify-center bg-red-500",
        summaryClass: "flex-row justify-center items-center bg-purple-500 rounded-lg mt-10",
        summaryStyle: { height: summaryHeight, width: summaryWidth },
        svgStyle: { height: summarySVGH, width: summarySVGW },
        progressBar: "flex-row bg-green-500 w-5/6 items-center justify-center",
        progressBarStyle: { height: barHeight},
    };

}

export const toDoTodayStyles = () => {

    return {
        mainContainerr: "flex-1 w-9/10 h-9/10 justify-top items-center bg-purple-500",
        toDoTodayClass: "flex-row justify-center items-center bg-blue-500 rounded-lg mt-10",
    }

}