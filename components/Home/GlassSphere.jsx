import { useControls } from "leva";

function GlassSphere({
  name = "Sphere",
  x = 0,
  y = 0,
  z = 0,
  defaultScale = 1,
}) {
  const { position, scale, roughness, thickness, transmission } = useControls(
    name,
    {
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
      thickness: {
        value: 1,
        min: 0,
        max: 1,
        step: 0.01,
      },
      roughness: {
        value: 0.7,
        min: 0,
        max: 1,
        step: 0.01,
      },
      transmission: {
        value: 0.98,
        min: 0,
        max: 1,
        step: 0.01,
      },
    }
  );

  return (
    <mesh position={[position.x, position.y, position.z]} scale={scale}>
      <sphereGeometry attach="geometry" args={[1, 80, 80]} />
      <meshPhysicalMaterial
        color="white"
        transmission={transmission}
        thickness={thickness}
        roughness={roughness}
      />
    </mesh>
  );
}

export default GlassSphere;
