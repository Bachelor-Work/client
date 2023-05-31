import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDialogState } from 'reakit/Dialog';

import { useMenuState, MenuButton } from 'reakit/Menu';

import './Header.scss';

import { useSelector } from 'react-redux';
import userPhoto from '../../common/icons/itemPNG.png';
import AuthHeaderComponent from '../AuthHeaderComponent/AuthHeaderComponent';

import {UserMenu, ManagerMenu, AdminMenu} from '../Menus';

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

              {user.role === 'USER' ? (
                <UserMenu menu={menu} fullname={user.name} email={user.email} />
              ) : user.role === 'MANAGER' ? (
                <ManagerMenu
                  menu={menu}
                  fullname={user.name}
                  email={user.email}
                />
              ) : (
                <AdminMenu
                  menu={menu}
                  fullname={user.name}
                  email={user.email}
                />
              )}
            </div>
          ) : (
            <AuthHeaderComponent dialog={dialog} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
