import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { CustomModel } from '../../components';

import './Scene.scss';

const MODEL_PATH = 'http://localhost:3000/f22.obj';

export const Scene = () => (
  <div className="scene">
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CustomModel modelPath={MODEL_PATH} />
      <OrbitControls />
      <Stats />
    </Canvas>
  </div>
);
