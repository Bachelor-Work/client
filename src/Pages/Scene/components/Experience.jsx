import { Suspense } from 'react';
import { PointerLockControls, Sky, Stats } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import Lights from './Lights';
import Player from './Player';
import Room from './Room';

const Experience = () => (
  <Suspense loader={null}>
    <Lights />
    <Sky />
    <Physics>
      <Room />
      <Player />
    </Physics>
    <PointerLockControls />
    <Stats />
  </Suspense>
);

export default Experience;
