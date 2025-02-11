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
  isActive?: boolean;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  title,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`hover:bg-blue-200 transition-all w-full text-left duration-150 py-2 px-4 rounded-md ${
        isActive ? 'bg-slate-300' : ''
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SideBarButton;
