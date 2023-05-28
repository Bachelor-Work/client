import { useRef, useState} from 'react';
import { useFrame,useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { MeshStandardMaterial, Object3D } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function CustomModel(props) {
  const meshRef = useRef();
  const instanceMeshRef = useRef();
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
    const instanceMesh = instanceMeshRef.current

    if (rotate && instanceMesh) {
      instanceMesh.rotation.y += 0.01;
    }
  });

  return (
    <RigidBody type="fixed">
      <instancedMesh
        ref={instanceMeshRef}
        {...props}
        onPointerDown={() => {
          setRotate((prevState) => !prevState);
        }}
      >
        <primitive object={meshRef.current} />
      </instancedMesh>
    </RigidBody>
  );
}
