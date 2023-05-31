import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main, Scene } from './pages';
import Museums from './pages/Museums/Museums';

import './App.scss';
import Footer from './components/Footer/Footer';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Contacts from './pages/Contacts/Contacts';
import MuseumDetails from './pages/MuseumDetails/MuseumDetails';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth } from './redux/slices/userSlice';
import { ManagerPanel } from './pages';

const App = () => {
  const dispatch = useDispatch();

  const userRole = useSelector(({ user }) => user.user.role);

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      dispatch(checkIsAuth());
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="pagesWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/museums/:id" element={<MuseumDetails />} />
          <Route
            path="/adminpanel"
            element={userRole === 'ADMIN' ? <AdminPanel /> : null}
          />
          <Route
            path="/museumpanel"
            element={userRole === 'MANAGER' ? <ManagerPanel /> : null}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
