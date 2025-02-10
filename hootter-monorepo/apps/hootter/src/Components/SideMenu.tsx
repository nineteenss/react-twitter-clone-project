//
//  SideMenu.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import SideBarButton from './UI/SideBar/SideBarButtons';

// interface SideMenuProps {

// }

const SideMenu: React.FC = () => {
  return (
    <div className="border-r border-solid border-gray-500 mr-4">
      <ul className="flex flex-col gap-2">
        <li>
          <SideBarButton title="Profile" />
        </li>
        <li>
          <SideBarButton title="Hoot feed" />
        </li>
        <li>
          <SideBarButton title="Friends" />
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
