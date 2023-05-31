import React from 'react';
import styles from './Menu.module.scss';
import { Menu, MenuItem, MenuSeparator } from 'reakit/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';

const AdminMenu = ({ menu, fullname, email }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    menu.hide();
    dispatch(logout());
  };

  return (
    <Menu {...menu} aria-label="Preferences">
      <div className={styles.menuContainer}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{fullname}</div>
          <div className={styles.userEmail}>{email}</div>
        </div>
        <MenuSeparator className={styles.menuSeparator} {...menu} />

        <Link className={styles.link} to="/adminpanel">
          <MenuItem
            onClick={() => menu.hide()}
            className={styles.settingsButton}
            {...menu}
          >
            Admin Panel
          </MenuItem>
        </Link>

        <Link to="/">
          <MenuItem
            onClick={() => logOut()}
            className={styles.logOutButton}
            {...menu}
          >
            Log out
          </MenuItem>
        </Link>
      </div>
    </Menu>
  );
};

export default AdminMenu;
