import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { quat, RigidBody, vec3 } from '@react-three/rapier'
import { MeshBasicMaterial, SphereGeometry, Vector3 } from 'three';

import useKeyboardControls from '../hooks';

const SPEED = 50;
const RADIUS = 10;

const playerGeometry = new SphereGeometry(RADIUS, 10, 10)
const playerMaterial = new MeshBasicMaterial({ color: 'orange' })

const Player = ({ initialPosition = [0, 10, 0] }) => {
  const { forward, backward, leftward, rightward } = useKeyboardControls();
  const rigidBody = useRef();

  useFrame(({ camera }, delta) => {
    const moveDistance = SPEED * delta;
    
    const frontVector = new Vector3(0, 0, Number(backward) - Number(forward));
    const sideVector = new Vector3(Number(leftward) - Number(rightward), 0, 0);
    const direction = new Vector3();

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(moveDistance)
      .applyEuler(camera.rotation);

    if (rigidBody.current) {
      const position = vec3(rigidBody.current.translation());
      const quaternion = quat(rigidBody.current.rotation());

      position.x += direction.x;
      position.z += direction.z;

      rigidBody.current.setTranslation(position, true);
      rigidBody.current.setRotation(quaternion, true);

      camera.position.copy(position);
    }
  });

  return (
    <RigidBody
      ref={rigidBody}
      position={initialPosition}
      friction={1}
      linearDamping={0.8}
      angularDamping={0.8}
    >
      <mesh geometry={playerGeometry} material={playerMaterial} />
    </RigidBody>
  );
};

export default Player;
