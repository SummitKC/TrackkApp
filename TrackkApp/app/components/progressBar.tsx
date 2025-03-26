import React from 'react';
import { Text, View} from 'react-native';

/* 
    Progress bar component 


*/ 

type ProgressBarProps = {
    progress: number;
    height?: number;
    backgroundColor?: string;
    fillColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    showPercentage?: boolean;
    textColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    height,
    backgroundColor = "#e0e0e0",
    fillColor = "#4CAF50",
    borderRadius = 6,
    borderWidth = 1,
    borderColor = '#BDBDBD',
    showPercentage = false,
    textColor = '#000000'
}) => { 

    // Calculate percentage string for display
    const percentage = `${progress}%`;
    
    return (
        <View className="w-full" style={{ height}}>
            <View 
                className="overflow-hidden relative"
                style={{ 
                    backgroundColor,
                    height: '100%',
                    width: '100%',
                    borderRadius,
                    borderWidth,
                    borderColor
                }}
            >
                <View 
                    className="absolute top-0 left-0 h-full flex items-center justify-center"
                    style={{ 
                        backgroundColor: fillColor,
                        width: `${progress}%`,
                        borderRadius 
                    }}
                >
                    {showPercentage && (
                        <Text 
                            className="font-bold text-center"
                            style={{ color: textColor }}
                        >
                            {percentage}
                        </Text>
                    )}
                </View>
                
                {showPercentage && progress < 25 && (
                    <View className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <Text 
                            className="font-bold text-center"
                            style={{ color: textColor }}>
                            {percentage}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}

export default ProgressBar;