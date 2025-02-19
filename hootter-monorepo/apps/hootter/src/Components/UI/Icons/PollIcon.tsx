//
//  PollIcon.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';
import IIconProps from './IconProps';

const PollIcon: React.FC<IIconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox={`0 0 ${width || 24} ${height || 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 17H20M8 15L5.5 18L4 17M11 12H20M8 10L5.5 13L4 12M11 7H20M8 5L5.5 8L4 7"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PollIcon;
