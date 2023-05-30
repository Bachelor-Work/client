import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import Footer from './components/Footer/Footer';
import {
  AdminPanel,
  Contacts,
  Main,
  MuseumDetails,
  Museums,
} from './pages';
import { checkIsAuth } from './redux/slices/userSlice';

import './App.scss';

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
          <Route path="/museums/:id" element={<MuseumDetails />} />
          <Route
            path="/adminpanel"
            element={userRole === 'ADMIN' ? <AdminPanel /> : <></>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
