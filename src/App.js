import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main, Scene } from './Pages';
import Museums from './Pages/Museums/Museums';

import './App.scss';
import Footer from './components/Footer/Footer';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import Contacts from './Pages/Contacts/Contacts';
import MuseumDetails from './Pages/MuseumDetails/MuseumDetails';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth } from './redux/slices/userSlice';
import ManagerPanel from './Pages/ManagerPanel/ManagerPanel';

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
            element={userRole === 'ADMIN' ? <AdminPanel /> : <></>}
          />
          <Route
            path="/museumpanel"
            element={userRole === 'MANAGER' ? <ManagerPanel /> : <></>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
