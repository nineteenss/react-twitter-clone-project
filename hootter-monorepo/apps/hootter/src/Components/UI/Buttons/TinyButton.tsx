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
  nobackground?: boolean;
  noaction?: boolean;
  onClick?: () => void;
}

const TinyButton: React.FC<TinyButtonProps> = ({
  label,
  color,
  nobackground,
  noaction,
  onClick,
}) => {
  const className = [
    `${!nobackground && 'px-2'}`,
    `${nobackground && 'text-slate-500'}`,
    'py-1',
    'rounded-xl',
    'text-[10px]',
    'font-semibold',
    `${!nobackground && color}`,
    `${(nobackground || noaction) && 'cursor-default'}`,
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
