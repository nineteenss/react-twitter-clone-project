//
//  Layout.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { screenSize } from '../Constants/screenSizeConstants';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import Footer from '../Components/Footer';
import SuggestBar from '../Components/SuggestBar';

const MainLayout: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Setup EL
    window.addEventListener('resize', handleResize);
    // Cleanup EL
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isXlScreen = windowWidth >= screenSize.xl;
  const isLgScreen = windowWidth >= screenSize.lg;
  const isSmdScreen = windowWidth >= screenSize.smd;
  const isSmScreen = windowWidth >= screenSize.sm;

  return (
    <>
      <div className="p-12 max-sm:px-6">
        {!isLgScreen && <Header />}
        {!isSmScreen && <SideMenu />}
        <div className="grid xl:grid-cols-[320px_minmax(0,_1fr)_420px] max-[910px]:grid-cols-[90px_minmax(0,_1fr)] grid-cols-[320px_minmax(0,_1fr)] max-[639px]:grid-cols-[minmax(0,_1fr)]">
          <div className="col-span-1 max-w-xs">
            {isLgScreen && <Header />}
            {isSmScreen && (
              <SideMenu
                portal={!isXlScreen && isSmdScreen && <SuggestBar />}
                isNeedResize={isSmdScreen}
              />
            )}
          </div>
          <div className="col-span-1">
            {!isSmdScreen && <SuggestBar />}
            <Outlet />
          </div>
          {isXlScreen && (
            <div className="col-span-1 p-4 ml-4 rounded-e-lg">
              <SuggestBar />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
