//
//  Header.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row lg:justify-start justify-center">
      <div className="flex flex-row gap-1 mb-12">
        <div className="text-4xl font-semibold text-white bg-gray-500 w-fit px-4 py-2 rounded-2xl">
          hootter.
        </div>
        <div className="text-md font-medium bg-slate-300 h-fit px-3 py-1 rounded-t-xl rounded-br-xl relative -top-2">
          hoot-hoot...
        </div>
      </div>
    </div>
  );
};

export default Header;
