//
//  HootWrapperButton.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';
import IBaseButtonProps from '../../../Props/uiElementsProps';

const HootWrapperButton: React.FC<IBaseButtonProps> = ({ label, icon, onClick }) => {
  return (
    <div
      className="flex flex-row gap-1 hover:bg-white transition-colors duration-200 px-1 py-[0.5px] rounded-3xl cursor-pointer"
      onClick={onClick}>
      {icon && icon}
      {label && label}
    </div>
  );
};

export default HootWrapperButton;
