//
//  AppProviders.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
