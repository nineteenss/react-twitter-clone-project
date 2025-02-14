//
//  Footer.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 11.02.2025
//

import React from 'react';
import { DEFAULT_NAMES } from '../Constants/nameConstants';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-between w-full h[150px] bg-slate-600 p-12 max-sm:mb-14 text-white">
      <p>
        {DEFAULT_NAMES.footerCopyName} {new Date().getFullYear()}
      </p>
      <p>{DEFAULT_NAMES.appSubtitleName}</p>
    </div>
  );
};

export default Footer;
