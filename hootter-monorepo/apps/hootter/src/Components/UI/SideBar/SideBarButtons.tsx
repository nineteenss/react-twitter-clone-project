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
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="hover:bg-blue-200 transition-all duration-150 py-2 px-4 rounded-md"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SideBarButton;
