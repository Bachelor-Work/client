import { Canvas } from '@react-three/fiber';

import Crosshair from './components/Crosshair';
import Experience from './components/Experience';

import './Scene.scss';

const Scene = () => (
  <div className="scene">
    <Canvas shadows>
      <Experience />
    </Canvas>
    <Crosshair />
  </div>
);

export default Scene;