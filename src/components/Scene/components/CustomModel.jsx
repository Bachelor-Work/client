import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { MeshStandardMaterial, Object3D } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function CustomModel(props) {
  const meshRef = useRef();
  const [rotate, setRotate] = useState();

  // Load the OBJ model using the useLoader hook
  const obj = useLoader(OBJLoader, props.modelPath);

  obj.traverse((child) => {
    if (child instanceof Object3D) {
      child.material = new MeshStandardMaterial({ color: 'red' });
    }
  });

  meshRef.current = obj;

  // Use the useFrame hook to update the rotation of the mesh every frame
  useFrame(() => {
    if (rotate) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <RigidBody type="fixed">
      <primitive
        object={meshRef.current}
        onPointerDown={() => {
          setRotate((prevState) => !prevState);
        }}
        {...props}
      />
    </RigidBody>
  );
}
