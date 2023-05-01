import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main, Scene } from './Pages';
import Museums from './Pages/Museums/Museums';

import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="pagesWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/scene" element={<Scene />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
