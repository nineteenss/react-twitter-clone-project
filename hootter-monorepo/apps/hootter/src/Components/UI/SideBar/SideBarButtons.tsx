//
//  SideBarButtons.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';

interface SideBarButtonProps {
  title: string;
  onClick?: () => void;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  isActive?: boolean;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  title,
  onClick,
  leftSection,
  rightSection,
  isActive,
}) => {
  return (
    <button
      className={`
        hover:bg-blue-200
        transition-all
        w-full
        text-left
        duration-150
        py-2
        px-4
        rounded-md
        ${isActive && 'bg-slate-300'}
        flex
        flex-row
        gap-3
      `}
      onClick={onClick}
    >
      {leftSection && leftSection}
      {title}
      {rightSection && rightSection}
    </button>
  );
};

export default SideBarButton;
