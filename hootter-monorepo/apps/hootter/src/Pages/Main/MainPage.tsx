import React from 'react';
import HootterFeed from '../../Components/HootterFeed';
import { useHoots } from '../../Hooks/useHoots';

const MainPage: React.FC = () => {
  const { receiveHootQuery } = useHoots();
  return <HootterFeed data={receiveHootQuery.data} />;
};

export default MainPage;
