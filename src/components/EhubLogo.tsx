import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, ViewStyle } from 'react-native';

interface EhubLogoProps {
  size?: number;
  style?: ViewStyle;
}

export function EhubLogo({ size = 100, style }: EhubLogoProps) {
  return (
    <View style={style}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Top Bar - Red */}
        <Path
          d="M5 25C5 12 18 12 30 12H95V35H5V25Z"
          fill="#EC2028"
        />
        {/* Middle Bar - Water Blue */}
        <Path
          d="M5 50C5 37 18 37 30 37H80V60H5V50Z"
          fill="#00AEEF"
        />
        {/* Bottom Bar - White */}
        <Path
          d="M5 75C5 62 18 62 30 62H65V85H5V75Z"
          fill="#FFFFFF"
        />
      </Svg>
    </View>
  );
}
