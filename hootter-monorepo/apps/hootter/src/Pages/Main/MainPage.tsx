//
//  MainPage.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import HootterFeed from '../../Components/HootterFeed';

interface MainPageProps {
  helloMsg: string;
}

const MainPage: React.FC<MainPageProps> = ({ helloMsg }) => {
  return (
    <div>
      <HootterFeed data={[]} />
    </div>
  );
};

export default MainPage;
