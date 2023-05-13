import React from 'react';

import './Footer.scss';
import flag from '../../common/icons/uaflag.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div>Built with ❤️ by Stepan Omeliukh</div>
        <div>2023© All Rights Reserved</div>
        <div className="right">
          <div>Stand with Ukraine</div>
          <img className="flagImg" src={flag} alt="Ukrainian Flag" />
          <div>✊</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
