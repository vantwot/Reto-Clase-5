import React, { useRef, useState } from "react";
import { useVideoTexture } from "@react-three/drei";

export default function Wall1() {

  const [reproducir, setReproducir] = useState(false);

  const handleClick = () => {
    setReproducir(!reproducir);
  }

  return (
    <mesh position={[3, 1, 10]} rotation-y={-Math.PI * 0.8} onClick={handleClick}>
      <planeBufferGeometry args={[6, 6]} />
      <meshBasicMaterial map={new useVideoTexture('1.mp4')}/>
    </mesh>
  );
}