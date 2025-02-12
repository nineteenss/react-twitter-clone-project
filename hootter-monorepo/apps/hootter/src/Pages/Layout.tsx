import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import Footer from '../Components/Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="p-12">
        <div className="grid grid-cols-[320px_minmax(0,_1fr)]">
          <div className="col-span-1 max-w-xs">
            <Header />
            <SideMenu />
          </div>
          <div className="col-span-1">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
