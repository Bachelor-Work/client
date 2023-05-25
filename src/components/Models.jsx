import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshStandardMaterial, Object3D } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function CustomModel(props) {
  const meshRef = useRef();
  const [rotate, setRotate] = useState();

  // Load the OBJ model using the useLoader hook
  const obj = useLoader(OBJLoader, props.modelPath);

  obj.traverse((child) => {
    if (child instanceof Object3D) {
      child.material = new MeshStandardMaterial({ color: 'red' })
    }
  })

  // Set the mesh to the loaded object
  meshRef.current = obj;

  // Use the useFrame hook to update the rotation of the mesh every frame
  useFrame(() => {
    if (rotate) {
      meshRef.current.rotation.x += 0.01;
    }
  }, [rotate]);

  return (
    <mesh
      {...props}
      onPointerDown={() => {
        setRotate((prevState) => !prevState);
      }}
    >
      <primitive object={meshRef.current} scale={10} />
    </mesh>
  );
}
