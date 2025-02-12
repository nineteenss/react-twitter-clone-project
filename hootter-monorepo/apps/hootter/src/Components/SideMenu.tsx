//
//  SideMenu.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import { defaultNames } from '../Constants/nameConstants';
import SideBarButton from './UI/SideBar/SideBarButtons';
import ProfileIcon from './UI/Icons/ProfileIcon';
import HootFeedIcon from './UI/Icons/HootFeedIcon';
import FriendsIcon from './UI/Icons/FirendsIcon';

const SideMenu: React.FC = () => {
  return (
    <div className="sticky top-12 border-r border-gray-500/25 pr-4 mr-4">
      <ul className="flex flex-col gap-2">
        <li>
          <SideBarButton
            title={defaultNames.hootFeedName}
            leftSection={<HootFeedIcon color="black" />}
            isActive={true}
          />
        </li>
        <li>
          <SideBarButton
            title={defaultNames.profileName}
            leftSection={<ProfileIcon color="black" />}
          />
        </li>
        <li>
          <SideBarButton
            title={defaultNames.friendsName}
            leftSection={<FriendsIcon color="black" />}
          />
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
