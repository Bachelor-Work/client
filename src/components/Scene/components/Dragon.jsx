import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { MeshStandardMaterial } from 'three';

import { MODELS_PATH } from '../constants';
const newMaterial = new MeshStandardMaterial({ color: 'red' });

export function Model({ clickHandler, ...props }) {
  const meshRef = useRef();
  const { nodes } = useGLTF(`${MODELS_PATH}/dragon.gltf`);

  return (
    <RigidBody type="fixed">
      <group {...props} dispose={null}>
        <mesh
          ref={meshRef}
          geometry={nodes.dragon.geometry}
          material={newMaterial}
          onPointerDown={clickHandler}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload(`${MODELS_PATH}/dragon.gltf`);
