//
//  Titles.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';

interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return <h1 className="text-blue-500 font-bold text-2xl">{label}</h1>;
};

export default Title;
