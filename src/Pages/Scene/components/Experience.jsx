import { Suspense } from 'react';
import { OrbitControls, Sky, Stats } from '@react-three/drei';

import Lights from './Lights';
import Room from './Room';

const Experience = () => (
  <Suspense loader={null}>
    <Lights />
    <Sky />
    <Room />
    <OrbitControls />
    <Stats />
  </Suspense>
);

export default Experience;
