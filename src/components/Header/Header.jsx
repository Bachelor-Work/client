import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

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
            <div className="burger" onClick={() => toggleClick()}>
              <span> </span>
            </div>
          </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/museums">Museums</Link>
            </li>
            <li>
               <Link to="/contacts">Contacts</Link>
            </li>
            <li>
               <Link to="/auth">Login / Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
