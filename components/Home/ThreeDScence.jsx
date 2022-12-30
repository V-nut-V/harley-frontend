import { useRef } from "react";
import { useControls } from "leva";
import Sphere from "./Sphere";
import colors from "../../config/colors";
import GlassSphere from "./GlassSphere";
import { Perf } from "r3f-perf";
import {
  PresentationControls,
  Float,
  useHelper,
} from "@react-three/drei";
import { PointLightHelper } from "three";

export default function ThreeDScence() {
  const light = useRef(null);
  useHelper(light, PointLightHelper);

  const { globalBrightness, showPerformance } = useControls(
    "Global",
    {
      globalBrightness: {
        value: 0.65,
        min: 0.1,
        max: 1,
        step: 0.01,
      },
      showPerformance: false,
    }
  );

  return (
    <>
      {showPerformance && <Perf position="bottom-left" />}
      {/* <OrbitControls makeDefault /> */}
      <ambientLight intensity={globalBrightness} />

      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={2}>
          <pointLight intensity={0.5} position={[1, 10, 0]} color="white" />
          <pointLight
            intensity={0.5}
            ref={light}
            position={[0, 0, 0]}
            color={colors.main}
          />
          <pointLight position={[5, -6, 5]} intensity={0.4} />

          <Sphere name="Sphere 1" />
          <Sphere name="Sphere 2" x={-1.7} y={0.8} z={-1} defaultScale={0.6} />
          <Sphere
            name="Sphere 3"
            x={0.6}
            y={2.1}
            z={-2}
            defaultScale={0.6}
            defaultRoughness={1}
            defaultColor="white"
          />
          <Sphere
            name="Sphere 4"
            x={2.5}
            y={1.1}
            z={-2}
            defaultScale={0.7}
            defaultRoughness={1}
            defaultColor="white"
          />
          <Sphere
            name="Sphere 5"
            x={-1}
            y={-1.1}
            z={-1.4}
            defaultScale={0.7}
            defaultRoughness={1}
            defaultColor="white"
          />
          <GlassSphere
            name="Glass 1"
            x={-1.8}
            y={0.3}
            z={1.8}
            defaultScale={1.4}
          />
          <GlassSphere
            name="Glass 2"
            x={1.1}
            y={-1.5}
            z={1.8}
            defaultScale={1.4}
          />
        </Float>
      </PresentationControls>
    </>
  );
}
