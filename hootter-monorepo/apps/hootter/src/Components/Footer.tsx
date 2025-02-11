//
//  Footer.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 11.02.2025
//

import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full h[150px] bg-slate-600 p-12 text-white">
      <p>Hootter {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
