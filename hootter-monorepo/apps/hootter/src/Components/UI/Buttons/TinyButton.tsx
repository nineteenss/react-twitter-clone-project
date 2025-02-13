//
//  TinyButton.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';

interface TinyButtonProps {
  label?: string;
  color?: string;
  onClick?: () => void;
}

const TinyButton: React.FC<TinyButtonProps> = ({ label, color, onClick }) => {
  const className = [
    'px-2',
    'py-1',
    'rounded-xl',
    'text-xs',
    'font-semibold',
    `${color}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default TinyButton;
