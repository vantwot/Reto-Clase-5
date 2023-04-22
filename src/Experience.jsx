import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Wall2 from './Wall2'
import Wall1 from './Wall1'
import { useRef } from 'react'


export default function Experience() {

      return (
        <>
          <Perf position="top-left" />

          <OrbitControls makeDefault />

          <directionalLight position={[2, 5, 3]} intensity={1.5} />
          <directionalLight position={[-2, -5, -3]} intensity={1.5} />
          <ambientLight intensity={0.5} />
            
          <Wall1/>
          <Wall2/>
        </>
      );
    }
    