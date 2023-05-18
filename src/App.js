import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main, Scene } from './Pages';
import Museums from './Pages/Museums/Museums';

import './App.scss';
import Footer from './components/Footer/Footer';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import Contacts from './Pages/Contacts/Contacts';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="pagesWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
