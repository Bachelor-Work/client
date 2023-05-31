import { useProgress } from "@react-three/drei";

const Progress = () => {
  const { progress } = useProgress();

  return (
    <div className="progress">
      <h1 style={{ color: 'white' }}>Loading {Math.floor(progress)}%</h1>
    </div>
  );
};

export default Progress;
