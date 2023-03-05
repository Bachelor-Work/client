import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main } from './pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
