import { Canvas } from '@react-three/fiber';

import { CustomModel } from '../../components';
import Experience from './components/Experience';

import './Scene.scss';

const MODEL_PATH = 'http://localhost:3000/f22.obj';

const Scene = () => (
  <div className="scene">
    <Canvas shadows>
      <Experience />
      <CustomModel modelPath={MODEL_PATH} />
    </Canvas>
  </div>
);

export default Scene;