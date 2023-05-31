import { Suspense, useEffect } from 'react';
import { PointerLockControls, Sky, Stats } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import { MODELS_PATH } from '../constants';
import { useARPopup } from '../context';
import { Model as DragonModel } from './Dragon';
import Lights from './Lights';
import Player from './Player';
import Progress from './Progress';
import Room from './Room';

const models = [
  { modelPath: `${MODELS_PATH}/dragon.obj`, position: [20, 0, 0] },
  { modelPath: `${MODELS_PATH}/dragon.obj`, position: [20, 0, 20] },
  { modelPath: `${MODELS_PATH}/dragon.obj`, position: [20, 0, 40] },
];

const Experience = () => {
  const { openARPopup } = useARPopup();

  return (
    <Suspense loader={<Progress />}>
      <Lights />
      <Sky />
      <Physics>
        <Room />
        <Player />
        {models.map((m, i) => <DragonModel key={i} {...m} clickHandler={openARPopup} />)}
      </Physics>
      <PointerLockControls />
      <Stats />
    </Suspense>
  );
}

export default Experience;
