import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { MeshStandardMaterial } from 'three';

import { MODELS_PATH } from '../../../constants';

const newMaterial = new MeshStandardMaterial({ color: 'red' });

export function Model(props) {
  const meshRef = useRef();
  const [rotate, setRotate] = useState();
  const { nodes } = useGLTF(`${MODELS_PATH}/dragon.gltf`);

  useFrame(() => {
    if (rotate) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <RigidBody type="fixed">
      <group {...props} dispose={null}>
        <mesh
          ref={meshRef}
          geometry={nodes.dragon.geometry}
          material={newMaterial}
          onPointerDown={() => {
            setRotate(prevState => !prevState);
          }}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload(`${MODELS_PATH}/dragon.gltf`);
