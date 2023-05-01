import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main, Scene } from './Pages';
import Museums from './Pages/Museums/Museums';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="/scene" element={<Scene />} />
      </Routes>
    </div>
  );
};

export default App;
