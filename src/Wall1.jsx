export default function Wall1() {

  return (
    <mesh position={[-3, 1, 10]} rotation-y={-Math.PI * 0.8}>
      <planeGeometry args={[6, 6]} />
    </mesh>
  );
}
