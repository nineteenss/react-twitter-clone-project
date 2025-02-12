//
//  app.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import MainLayout from '../Pages/Layout';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/Main/MainPage';

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
