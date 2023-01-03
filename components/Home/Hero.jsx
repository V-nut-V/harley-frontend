import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { HeroWrapper } from "./Hero.style";
import { Canvas } from "@react-three/fiber"
import { Leva } from "leva";
import ThreeDScence from "./ThreeDScence";

function Hero({ pageData }) {
  const [hideControlBoard, setHideControlBoard] = useState(true);

  const handleScroll = () => {
    console.log("Clicked");
    const tabs = document.getElementById("category_tabs");
    console.log(tabs)
    if(tabs) tabs.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <HeroWrapper>
      <div className="content">
        <h1 onDoubleClick={() => setHideControlBoard((prev) => !prev)}>
          {pageData.Title}
        </h1>
        <p>{pageData.Description}</p>
        <button onClick={handleScroll}>
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
          position: [0, 0, 16],
        }}
      >
        <ThreeDScence />
      </Canvas>
    </HeroWrapper>
  );
}

export default Hero;
