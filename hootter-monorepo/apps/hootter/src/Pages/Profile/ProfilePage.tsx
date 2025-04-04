import React from 'react';
import ProfileContent from '../../Components/ProfileContent';
import { useHoots } from '../../Hooks/useHoots';

const ProfilePage: React.FC = () => {
  const { receiveHootQuery } = useHoots();
  return <ProfileContent data={receiveHootQuery.data} />;
};

export default ProfilePage;
