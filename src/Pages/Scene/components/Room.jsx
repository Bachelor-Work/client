import * as THREE from 'three';

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
  [1, _, 1, _, _, _, _, 1, _, 1],
  [1, _, _, _, _, _, _, _, _, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const TILE_SIZE = 32;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const planeGeometry = new THREE.PlaneGeometry(1, 1);

const wallMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 'black' });
const floorMaterial = new THREE.MeshBasicMaterial({ color: 'green', side: THREE.DoubleSide });

const Wall = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => (
  <mesh
    geometry={boxGeometry}
    material={wallMaterial}
    position={position}
    rotatation={rotation}
    scale={[TILE_SIZE, TILE_SIZE, TILE_SIZE * 2]}
    userData={{ isWall: true }}
    castShadow
  />
);

const Walls = () => {
  const heightSegments = grid.length

  return (
    <group position={[-TILE_SIZE * 4.5, -TILE_SIZE * 5.5, 0]}>
      {
        grid.map((row, rowIndex) =>
          row.map((col, colIndex) => {
            const isWall = col === 1
            if (!isWall) return null
            const x = colIndex * TILE_SIZE
            const y = (heightSegments - rowIndex - 1) * TILE_SIZE
            const z = TILE_SIZE / 2

            return <Wall key={`${rowIndex}-${colIndex}`} position={[x, y, z]} />
          }))
      }
    </group>
  )
};

const FloorPlane = () => {
  const scaleX = TILE_SIZE * grid[0].length;
  const scaleY = TILE_SIZE * grid.length;

  return (
    <mesh
      geometry={planeGeometry}
      position={[0, 0, -TILE_SIZE / 2]}
      scale={[scaleX, scaleY, 1]}
      material={floorMaterial}
      receiveShadow
    />
  );
}

const Room = () => (
  <group rotation={[-Math.PI / 2, 0, 0]}>
    <FloorPlane />
    <Walls />
  </group>
);

export default Room;