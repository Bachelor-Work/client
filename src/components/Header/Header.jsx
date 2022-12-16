import React from 'react';
import './Header.scss';
import menuIcon from '../../common/icons/menu-icon.svg';

const Header = () => {
  function toggleClick() {
    const menu = document.querySelector('.navigation');
    menu.classList.toggle('active');
  }

  return (
    <div className="navigation">
      <div className="container">
        <div className="navbar">
          <div className="logo-toggle-container">
            <div className="logo">Online Museum</div>
            <img
              className="toggle-box"
              src={menuIcon}
              alt="menuIcon"
              onClick={() => toggleClick()}
            />
          </div>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Museums</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
