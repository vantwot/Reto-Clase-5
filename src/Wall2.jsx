export default function Wall2() {


    return (
        <mesh position = {[6, 0, 6]} rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[6, 6]} />
        </mesh>
    )
}
