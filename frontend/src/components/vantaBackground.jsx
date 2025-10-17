import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // required by VANTA

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // dynamically import vanta birds
    import("vanta/dist/vanta.birds.min").then((VANTA) => {
      if (!vantaEffect) {
        const effect = VANTA.default.BIRDS({
          el: vantaRef.current,
          THREE, // pass THREE.js
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0a0a, // dark bg
          color1: 0xff0055, // bird color
          color2: 0x00ffff, // highlight color
        });
        setVantaEffect(effect);
      }
    });

    // cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex items-center justify-center text-white text-4xl font-bold"
    >
      Welcome to My Website 🕊️
    </div>
  );
};

export default VantaBackground;
