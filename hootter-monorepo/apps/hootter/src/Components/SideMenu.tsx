//
//  SideMenu.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_NAMES } from '../Constants/nameConstants';
import { PATHS } from '../Constants/pathsConstants';
import SideBarButton from './UI/SideBar/SideBarButtons';
import ProfileIcon from './UI/Icons/ProfileIcon';
import HootFeedIcon from './UI/Icons/HootFeedIcon';
import FriendsIcon from './UI/Icons/FirendsIcon';

interface ISideMenuProps {
  portal?: React.ReactNode;
  isNeedResize?: boolean;
}

const SideMenu: React.FC<ISideMenuProps> = ({ portal, isNeedResize }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const isActive = (path: string) => pathname === path;

  return (
    <div className="sticky top-12 max-sm:top-auto max-sm:border border-r border-gray-500/25 pr-4 mr-4 flex flex-col gap-4 max-sm:items-center max-sm:mx-0 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:z-50 max-sm:bg-white max-sm:px-4 max-sm:py-2">
      <ul className="flex flex-col gap-2 max-sm:flex-row">
        <li>
          <SideBarButton
            label={isNeedResize && DEFAULT_NAMES.hootFeedName}
            leftSection={<HootFeedIcon color="black" />}
            isActive={isActive(PATHS.HOME)}
            onClick={() => navigate(PATHS.HOME)}
          />
        </li>
        <li>
          <SideBarButton
            label={isNeedResize && DEFAULT_NAMES.profileName}
            leftSection={<ProfileIcon color="black" />}
            isActive={isActive(PATHS.PROFILE)}
            onClick={() => navigate(PATHS.PROFILE)}
          />
        </li>
        <li>
          <SideBarButton
            label={isNeedResize && DEFAULT_NAMES.friendsName}
            leftSection={<FriendsIcon color="black" />}
            isActive={isActive(PATHS.FRIENDS)}
            onClick={() => navigate(PATHS.FRIENDS)}
          />
        </li>
      </ul>
      {portal && portal}
    </div>
  );
};

export default SideMenu;
