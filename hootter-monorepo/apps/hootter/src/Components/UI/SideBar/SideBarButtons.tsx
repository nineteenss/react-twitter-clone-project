//
//  SideBarButtons.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';

interface ISideBarButtonProps {
  label: string | boolean | undefined;
  onClick?: () => void;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  isActive?: boolean;
}

const SideBarButton: React.FC<ISideBarButtonProps> = ({
  label,
  onClick,
  leftSection,
  rightSection,
  isActive,
}) => {
  return (
    <button
      className={`hover:bg-blue-200 transition-all w-full text-left duration-150 py-2 px-4 rounded-md ${
        isActive && 'bg-yellow-500'
      } flex flex-row gap-3 font-semibold`}
      onClick={onClick}>
      {leftSection && leftSection}
      {label}
      {rightSection && rightSection}
    </button>
  );
};

export default SideBarButton;
