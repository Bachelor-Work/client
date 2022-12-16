import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Main } from './Pages';

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
