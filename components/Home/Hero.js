import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { HeroWrapper } from "./Hero.style";
import { Canvas } from "@react-three/fiber"
import { Leva } from "leva";
import ThreeDScence from "./ThreeDScence";

function Hero({ pageData }) {
  const [hideControlBoard, setHideControlBoard] = useState(true);

  return (
    <HeroWrapper>
      <div className="content">
        <h1>{pageData.Title}</h1>
        <p>{pageData.Description}</p>
        <button onClick={() => setHideControlBoard((prev) => !prev)}>
          Portfolio <BsFillCaretDownFill />
        </button>
      </div>
      <Leva hidden={hideControlBoard} />
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [0, 0, 15],
        }}
      >
        <ThreeDScence />
      </Canvas>
    </HeroWrapper>
  );
}

export default Hero;
