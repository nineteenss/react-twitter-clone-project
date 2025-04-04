import React from 'react';
import { DEFAULT_NAMES } from '../Constants/nameConstants';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full p-12 bg-slate-600 max-sm:mb-14 text-white">
      <p>
        {DEFAULT_NAMES.footerCopyName} {new Date().getFullYear()}
      </p>
      <p>{DEFAULT_NAMES.appSubtitleName}</p>
    </div>
  );
};

export default Footer;
