//
//  ProfilePage.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 14.02.2025
//

import React from 'react';
import ProfileContent from '../../Components/ProfileContent';
import { useHoots } from '../../Hooks/useHoots';

const ProfilePage: React.FC = () => {
  const { receiveHootQuery } = useHoots();
  return <ProfileContent data={receiveHootQuery.data} />;
};

export default ProfilePage;
