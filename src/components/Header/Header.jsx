import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

import './Header.scss';

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
  const [menuActive, setMenuActive] = useState(false);

  function toggleClick() {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  }

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
          <CustomLink href="/login" title="Login" />
          <div className='link'>|</div>
          <CustomLink href="/registration" title="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
