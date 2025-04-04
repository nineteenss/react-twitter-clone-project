import React from 'react';
import IIconProps from './IconProps';

const GifIcon: React.FC<IIconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox={`0 0 ${width || 24} ${height || 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15V9L15 12L10 15Z"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GifIcon;
