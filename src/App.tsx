import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Aboutpage } from './pages/Aboutpage';
import { Mainpage } from './pages/Mainpage';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
};

export default App;
