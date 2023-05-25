import { cloneElement, useState } from 'react';
import {
  OrthographicCamera,
  PointerLockControls
} from '@react-three/drei';
import { Vector3 } from 'three';

export function TopDownCameraControls({ children }) {
  const [initialPosition] = useState(new Vector3(0, 10, 120));

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, 500, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        zoom={2}
      />
      {cloneElement(children, { initialPosition })}
    </>
  );
}

export function FirstPersonCameraControls({ children }) {
  const [initialPosition] = useState(new Vector3(0, 10, 120));

  return (
    <>
      {cloneElement(children, { initialPosition })}
      <PointerLockControls />
    </>
  );
}