import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import Footer from '../Components/Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="p-12">
        <Header />
        <div className="grid grid-cols-[320px_minmax(0,_1fr)]">
          <div className="max-w-xs">
            <SideMenu />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
