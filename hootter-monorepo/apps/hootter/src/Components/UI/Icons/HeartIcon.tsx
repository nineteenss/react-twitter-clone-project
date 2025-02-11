//
//  HeartIcon.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import IconProps from './IconProps';

const HeartIcon: React.FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox={`0 0 ${width || 24} ${height || 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
