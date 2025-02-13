//
//  Footer.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 11.02.2025
//

import React from 'react';
import { defaultNames } from '../Constants/nameConstants';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-between w-full h[150px] bg-slate-600 p-12 max-sm:mb-14 text-white">
      <p>
        {defaultNames.footerCopyName} {new Date().getFullYear()}
      </p>
      <p>{defaultNames.footerDevelopedAtName}</p>
    </div>
  );
};

export default Footer;
