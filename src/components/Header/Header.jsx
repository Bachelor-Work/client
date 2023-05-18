import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  useDialogState,
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
} from 'reakit/Dialog';

import './Header.scss';
import Register from '../Register/Register';
import Login from '../Login/Login';

const CustomLink = ({ href, title }) => {
  const location = useLocation();

  if (href === location.pathname) console.log(href);

  return (
    <Link
      to={href}
      className={href === location.pathname ? 'activeLink' : 'link'}
    >
      {title}
    </Link>
  );
};

const Header = () => {
  const dialog = useDialogState({ animated: true });

  const [clickListener, setClickListener] = useState();

  const handleWindowChange = (value) => {
    setClickListener(value);
  };

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="leftWrapper">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/museums" title="Museums" />
          <CustomLink href="/contacts" title="Contacts" />
        </div>
        <div className="logo">Mosaics</div>
        <div className="rightWrapper">
          <DialogDisclosure className="link" onClick={() => setClickListener(true)}  {...dialog}>
            Register
          </DialogDisclosure>
          <p className="separator">|</p>
          <DialogDisclosure className="link" onClick={() => setClickListener(false)} {...dialog}>
            Login
          </DialogDisclosure>
          <DialogBackdrop {...dialog} className="backdropStyles">
            <Dialog aria-label="Welcome" {...dialog} className="dialogStyles">
              {clickListener ? (
                <Register changeWindow={handleWindowChange} dialog={dialog} />
              ) : (
                <Login changeWindow={handleWindowChange} dialog={dialog} />
              )}
            </Dialog>
          </DialogBackdrop>{' '}
        </div>
      </div>
    </div>
  );
};

export default Header;
