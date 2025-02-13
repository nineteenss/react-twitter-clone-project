//
//  Titles.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-blue-500 font-bold text-xl">{text}</h1>;
};

export default Title;
