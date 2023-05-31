import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogDisclosure } from 'reakit/Dialog';

import Register from './Register/Register';
import Login from './Login/Login';

const AuthHeaderComponent = ({ dialog }) => {
  const [clickListener, setClickListener] = useState();

  const handleWindowChange = (value) => {
    setClickListener(value);
  };
  return (
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
        <Dialog aria-label="Welcome" {...dialog} className="dialogStyles">
          {clickListener ? (
            <Register changeWindow={handleWindowChange} dialog={dialog} />
          ) : (
            <Login changeWindow={handleWindowChange} dialog={dialog} />
          )}
        </Dialog>
      </DialogBackdrop>
    </>
  );
};

export default AuthHeaderComponent;
