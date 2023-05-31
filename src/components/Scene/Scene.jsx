import { Canvas } from '@react-three/fiber';

import ARPopup from './components/ARPopup';
import Crosshair from './components/Crosshair';
import Experience from './components/Experience';
import { ARPopupContextProvider } from './context';

import './Scene.scss';

const Scene = () => (
  <div className="scene">
    <ARPopupContextProvider>
      <Canvas shadows>
        <Experience />
      </Canvas>
      <Crosshair />
      <ARPopup />
    </ARPopupContextProvider>
  </div>
);

export default Scene;