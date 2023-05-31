import React from 'react';
import {
  useDialogState,
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
} from 'reakit/Dialog';

import styles from './Menu.module.scss';
import { Menu, MenuItem, MenuSeparator } from 'reakit/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import RequestManagerRole from '../RequestManagerRole/RequestManagerRole';

const UserMenu = ({ menu, fullname, email }) => {
  const dialog = useDialogState({ animated: 250 });
  const dispatch = useDispatch();

  const logOut = () => {
    menu.hide();
    dispatch(logout());
  };

  const menuRequest = () => {
    menu.hide();
    dialog.show();
  };

  return (
    <Menu {...menu} aria-label="Preferences">
      <div className={styles.menuContainer}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{fullname}</div>
          <div title={email} className={styles.userEmail}>
            {email}
          </div>
        </div>
        <MenuSeparator className={styles.menuSeparator} {...menu} />

        <DialogDisclosure className={styles.settingsButton} {...dialog}>
          Request Manager Role
        </DialogDisclosure>

        <DialogBackdrop {...dialog} className={styles.backdropStyles}>
          <Dialog
            aria-label="Welcome"
            {...dialog}
            className={styles.dialogRequestStyle}
          >
            <RequestManagerRole dialog={dialog} menu={menu} />
          </Dialog>
        </DialogBackdrop>

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

export default UserMenu;
