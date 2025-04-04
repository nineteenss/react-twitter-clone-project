import MainLayout from '../Pages/Layout';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './../Constants/pathsConstants';
import MainPage from '../Pages/Main/MainPage';
import ProfilePage from '../Pages/Profile/ProfilePage';
import FriendsPage from '../Pages/Friends/FriendsPage';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

export function App() {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<Login />} />
      <Route path={PATHS.REGISTER} element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<MainPage />} />
        <Route path={PATHS.PROFILE} element={<ProfilePage />} />
        <Route path={PATHS.FRIENDS} element={<FriendsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
