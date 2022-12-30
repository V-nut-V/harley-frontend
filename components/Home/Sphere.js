import { useControls } from "leva";
import colors from "../../config/colors";

function Sphere({ name = "Sphere", x = 0, y = 0, z = 0, defaultColor = colors.main, defaultScale = 1 }) {
  const { position, color, scale, roughness, metalness } = useControls(name, {
    position: {
      value: { x, y, z },
      step: 0.1,
    },
    scale: {
      value: defaultScale,
      min: 0.1,
      max: 3,
      step: 0.1,
    },
    color: defaultColor,
    roughness: {
      value: 0.5,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
    metalness: {
      value: 0.1,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
  });

  return (
    <mesh position={[position.x, position.y, position.z]} scale={scale}>
      <sphereGeometry attach="geometry" args={[1, 50, 50]} />
      <meshPhysicalMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  );
}

export default Sphere;
