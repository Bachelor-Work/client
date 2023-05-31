import { useEffect } from 'react';

import { useARPopup } from '../../context';
import ARScene from '../ARScene';

import './ARPopup.scss';

const ARPopup = () => {
  const { isARPopupOpen, closeARPopup } = useARPopup();

  useEffect(() => {
    const handleEscape = (e) => {
      // e.stopPropagation();

      if (e.code === 'Escape') {
        closeARPopup();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  if (!isARPopupOpen) return null;

  return (
    <div className="popup">
      <ARScene />
    </div>
  )
}

export default ARPopup;