import { Canvas } from '@react-three/fiber';

import { CustomModel } from '../../components';
import { MODELS_PATH } from '../../constants';
import Experience from './components/Experience';

import './Scene.scss';

const Scene = () => (
  <div className="scene">
    <Canvas shadows>
      <Experience />
      <CustomModel modelPath={`${MODELS_PATH}/dragon.obj`} />
    </Canvas>
  </div>
);

export default Scene;