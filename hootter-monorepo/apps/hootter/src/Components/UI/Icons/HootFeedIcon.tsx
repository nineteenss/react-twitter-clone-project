//
//  HootFeedIcon.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 12.02.2025
//

import React from 'react';
import IconProps from './IconProps';

const HootFeedIcon: React.FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox={`0 0 ${width || 24} ${height || 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HootFeedIcon;
