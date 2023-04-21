import { useVideo } from 'react-use';
import { useVideoTexture } from '@react-three/drei';

export default function Wall1() {
  const [videoRef, { canPlay }] = useVideo(() => {
    const video = document.createElement('video');
    video.src = '/static/1.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.play();
    return video;
  });

  const { texture: videoTexture } = useVideoTexture(videoRef);

  return (
    <mesh position={[0, 0, 0]} rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[6, 6]} />
      <meshBasicMaterial map={videoTexture} />
      {canPlay && (
        <group>
          <video ref={videoRef} playsInline muted loop />
        </group>
      )}
    </mesh>
  );
}
