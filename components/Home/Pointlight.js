import { useControls } from "leva";

function Pointlight(name = "PointLight", x = 0, y = 2, z = 0) {
  const { position, intensity, color } = useControls(name, {
    position: {
      value: { x, y, z },
      step: 0.1,
    },
    intensity: {
      value: 0.4,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
    color: "#ffffff",
  });

  return (
    <pointLight
      color={color}
      position={[0, position.y, position.z]}
      intensity={intensity}
    />
  );
}

export default Pointlight;
