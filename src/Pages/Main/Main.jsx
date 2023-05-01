import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => {
  return (
    <main>
      <div className="img_wrap">
          <div className="border-text">brave.UKRAINIAN</div>
          <Link to="/museums" className="button">
            Go to Museums
          </Link>
      </div>
    </main>
  );
};

export default Main;
