export default function Crosshair() {
  return (
    <svg
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      viewBox="0 0 100 100"
    >
      <line x1="50" y1="0" x2="50" y2="30" stroke="white" strokeWidth="5%" />
      <line x1="50" y1="70" x2="50" y2="100" stroke="white" strokeWidth="5%" />
      <line x1="0" y1="50" x2="30" y2="50" stroke="white" strokeWidth="5%" />
      <line x1="70" y1="50" x2="100" y2="50" stroke="white" strokeWidth="5%" />
    </svg>
  )
}
