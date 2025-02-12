//
//  Button.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 12.02.2025
//

import React, { useState, useEffect } from 'react';

interface ButtonProps {
  text?: string;
  color?: string;
  onClick?: () => void;
  left?: boolean;
  center?: boolean;
  right?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color,
  left,
  center,
  right,
}) => {
  const className = [
    color || 'bg-orange-500',
    'relative',
    'hover-overlay',
    'transition-all',
    'duration-75',
    'text-white',
    'font-medium',
    'rounded-xl',
    'px-4',
    'py-2',
    left && 'self-start',
    center && 'self-center',
    right && 'self-end',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
