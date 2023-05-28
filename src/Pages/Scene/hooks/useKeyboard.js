import { useEffect, useState } from 'react';

const keys = {
  KeyW: 'forward',
  KeyS: 'backward',
  KeyA: 'leftward',
  KeyD: 'rightward',
  ArrowUp: 'forward',
  ArrowDown: 'backward',
  ArrowLeft: 'leftward',
  ArrowRight: 'rightward',
};
const moveFieldByKey = (key) => keys[key];

export default function useKeyboardControls() {
  const [movement, setMovement] = useState({
    forward: false,
    leftward: false,
    backward: false,
    rightward: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      setMovement((prevState) => ({
        ...prevState,
        [moveFieldByKey(event.code)]: true,
      }));
    };
    const handleKeyUp = (event) => {
      setMovement((prevState) => ({
        ...prevState,
        [moveFieldByKey(event.code)]: false,
      }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
}
