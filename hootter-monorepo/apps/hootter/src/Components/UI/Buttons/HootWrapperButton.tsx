//
//  HootWrapperButton.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';

interface HootWrapperButtonProps {
  text?: string | number;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const HootWrapperButton: React.FC<HootWrapperButtonProps> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <div
      className="flex flex-row gap-1 hover:bg-white transition-colors duration-200 px-1 py-[0.5px] rounded-3xl cursor-pointer"
      onClick={onClick}
    >
      {icon && icon}
      {text && text}
    </div>
  );
};

export default HootWrapperButton;
