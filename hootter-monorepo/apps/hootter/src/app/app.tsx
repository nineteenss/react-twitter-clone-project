//
//  app.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import MainLayout from '../Pages/Layout';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './../Constants/pathsConstants';
import MainPage from '../Pages/Main/MainPage';
import ProfilePage from '../Pages/Profile/ProfilePage';
import FriendsPage from '../Pages/Friends/FriendsPage';

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<MainPage />} />
        <Route path={PATHS.PROFILE} element={<ProfilePage />} />
        <Route path={PATHS.FRIENDS} element={<FriendsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
