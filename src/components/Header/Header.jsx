import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  useDialogState,
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
} from 'reakit/Dialog';
import { useMenuState, MenuButton } from 'reakit/Menu';

import './Header.scss';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import userPhoto from '../../common/icons/itemPNG.png';

const CustomLink = ({ href, title }) => {
  const location = useLocation();

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
  const menu = useMenuState({ animated: 250 });

  const isAuth = useSelector(({ user }) => user.isAuth);
  const user = useSelector(({ user }) => user.user);

  const [clickListener, setClickListener] = useState();

  const handleWindowChange = (value) => {
    setClickListener(value);
  };

  useEffect(() => {
    dialog.stopAnimation();
  }, [isAuth]);

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
          {isAuth ? (
            <div className="userBar">
              <div className="welcomeName">Welcome, {user.name}!</div>

              <MenuButton className="menuButton" {...menu}>
                <img src={userPhoto} alt="" />
              </MenuButton>
              <UserMenu
                menu={menu}
                fullname={user.name}
                email={user.email}
                role={user.role}
              />
            </div>
          ) : (
            <>
              <DialogDisclosure
                className="link"
                onClick={() => setClickListener(true)}
                {...dialog}
              >
                Register
              </DialogDisclosure>
              <p className="separator">|</p>
              <DialogDisclosure
                className="link"
                onClick={() => setClickListener(false)}
                {...dialog}
              >
                Login
              </DialogDisclosure>
              <DialogBackdrop {...dialog} className="backdropStyles">
                <Dialog
                  aria-label="Welcome"
                  {...dialog}
                  className="dialogStyles"
                >
                  {clickListener ? (
                    <Register
                      changeWindow={handleWindowChange}
                      dialog={dialog}
                    />
                  ) : (
                    <Login changeWindow={handleWindowChange} dialog={dialog} />
                  )}
                </Dialog>
              </DialogBackdrop>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
