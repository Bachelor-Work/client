import { createContext, useContext, useState } from 'react';

const ARPopupContext = createContext();

const ARPopupContextProvider = ({ children }) => {
  const [isARPopupOpen, setARPopupOpen] = useState(false);

  const openARPopup = () => {
    setARPopupOpen(true);
  };

  const closeARPopup = () => {
    setARPopupOpen(false);
  };

  return (
    <ARPopupContext.Provider
      value={{ isARPopupOpen, openARPopup, closeARPopup }}
    >
      {children}
    </ARPopupContext.Provider>
  );
};

const useARPopup = () => {
  const context = useContext(ARPopupContext);
  if (context === undefined) {
    throw new Error('useARPopup must be used within a ARPopupContextProvider');
  }
  return context;
};

export { ARPopupContextProvider, useARPopup };
