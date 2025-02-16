//
//  MainPage.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import HootterFeed from '../../Components/HootterFeed';
import { useHoots } from '../../Hooks/useHoots';

const MainPage: React.FC = () => {
  const { receiveHootQuery } = useHoots();
  console.log(receiveHootQuery);

  return <HootterFeed data={[]} />;
};

export default MainPage;
