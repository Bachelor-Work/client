import { Suspense } from 'react';
import { PointerLockControls, Sky, Stats } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import Lights from './Lights';
import Player from './Player';
import Progress from './Progress';
import Room from './Room';

const Experience = () => (
  <Suspense loader={<Progress />}>
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
