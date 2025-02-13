//
//  Button.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 12.02.2025
//

import React from 'react';

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  color,
  left,
  center,
  right,
  leftSection,
  rightSection,
}) => {
  const className = [
    color || 'bg-orange-500',
    'flex',
    'flex-row',
    'gap-2',
    'relative',
    'hover-overlay',
    'transition-all',
    'duration-75',
    'text-white',
    'font-medium',
    'rounded-xl',
    'px-4',
    'max-sm:px-2.5',
    'py-2',
    'max-sm:py-2',
    left && 'self-start',
    center && 'self-center',
    right && 'self-end',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick}>
      {leftSection && leftSection}
      {icon && icon}
      {label && label}
      {rightSection && rightSection}
    </button>
  );
};

export default Button;
