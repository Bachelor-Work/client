import { useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

import { TEXTURES_PATH } from '../constants';

const _ = false;
const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, 1, _, _, _, _, 1, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, 1, 1, _, _, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, _, 1, _, _, _, _, 1, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const TILE_SIZE = 32;

const wallGeometry = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE, TILE_SIZE);

const wallMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
const floorMaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide });

const Wall = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => (
  <RigidBody type="fixed">
    <mesh
      position={position}
      rotation={rotation}
      geometry={wallGeometry}
      material={wallMaterial}
      castShadow
    />
  </RigidBody>
);

const Walls = () => (
  <group position={[-TILE_SIZE * 4.5, 0, TILE_SIZE * 9.5]} rotation={[-Math.PI / 2, 0, 0]}>
    {grid.map((row, rowIndex) =>
      row.map((col, colIndex) => {
        const isWall = col === 1;
        if (!isWall) return null;
        const x = colIndex * TILE_SIZE;
        const y = (grid.length - rowIndex - 1) * TILE_SIZE;
        const z = TILE_SIZE / 2;

        return <Wall key={`${rowIndex}-${colIndex}`} position={[x, y, z]} />;
      })
    )}
  </group>
);

const FloorPlane = () => {
  const texture = useLoader(THREE.TextureLoader, `${TEXTURES_PATH}/laminate_floor.jpg`);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(Math.floor(1000 / TILE_SIZE), Math.floor(1000 / TILE_SIZE));
  floorMaterial.map = texture;

  return (
    <RigidBody type="fixed">
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[TILE_SIZE * grid[0].length, TILE_SIZE * grid.length]} />
        <meshPhongMaterial {...floorMaterial} />
      </mesh>
    </RigidBody>
  );
};

const Room = () => (
  <>
    <FloorPlane />
    <Walls />
  </>
);

export default Room;
