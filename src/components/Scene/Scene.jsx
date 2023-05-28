import { Canvas } from '@react-three/fiber';

import { MODELS_PATH } from '../../constants';
import Crosshair from './components/Crosshair';
import CustomModel from './components/CustomModel';
import Experience from './components/Experience';

import './Scene.scss';

const Scene = () => (
  <div className="scene">
    <Canvas shadows>
      <Experience />
      <CustomModel modelPath={`${MODELS_PATH}/dragon.obj`} />
    </Canvas>
    <Crosshair />
  </div>
);

export default Scene;