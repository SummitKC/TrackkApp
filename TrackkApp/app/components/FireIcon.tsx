import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

type FireIconProps = {
  width?: number;
  height?: number;
  innerFlameColor?: string;
  outerFlameColor?: string;
  strokeColor?: string;
};

export const FireIcon: React.FC<FireIconProps> = ({
  width = 180,
  height = 180,
  innerFlameColor = '#FF4500',
  outerFlameColor = '#FFA500',
  strokeColor = '#FF0000',
}) => (
  <Svg width={width} height={height} viewBox="0 0 3000 3000">
    {/* Outer flame layer */}
    <G
      strokeLinecap="round"
      fill={outerFlameColor}
      stroke={strokeColor}
      strokeWidth="15"
    >
      <Path d="M840.91,1692.08c0,0,328.4-480.9,565.04-743.32c247.95,581.33-182.07,941.28-182.07,941.28 s447.24-321.21,491.01-814.94c240.56,451.61-69.92,997.87-69.92,997.87s342.64-476.18,291.47-783.65 c177.35,95.92,337.4,712.35,54.15,1128.86c-308.74,454.79-842.77,327.48-1264.16,101.22c-421.39-226.25-275.7-827.33-275.7-827.33z" />
    </G>
    
    {/* Inner flame layer */}
    <G
      strokeLinecap="round"
      fill={innerFlameColor}
      stroke={strokeColor}
      strokeWidth="15"
    >
      <Path d="M1456.22,1890.05c0,0,251.9-368.86,433.29-570.01c190.16,445.86-139.66,721.91-139.66,721.91 s343.13-246.4,376.61-625.26c184.48,346.48-53.64,765.5-53.64,765.5s262.83-365.25,223.55-600.98 c136.05,73.57,258.77,546.48,41.52,866.09c-236.8,348.77-646.29,251.24-969.52,77.67c-323.23-173.56-211.47-634.91-211.47-634.91z" />
    </G>
  </Svg>
);

export default FireIcon;