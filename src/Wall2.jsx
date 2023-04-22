import React, { useState } from 'react';
import { TextureLoader } from 'three';

export default function Wall2() {
  const [texture, setTexture] = useState('1.jpg');

  const handleDoubleClick = () => {
    setTexture('2.jpg');
  }

  return (
    <mesh position={[-3, 1, 10]} rotation-y={-Math.PI * 0.8} onDoubleClick={handleDoubleClick}>
      <planeGeometry args={[6, 6]} />
      <meshBasicMaterial map={new TextureLoader().load(texture)} />
    </mesh>
  )
}
