import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MinecraftSheepProps {
    [key: string]: any;
}

const MinecraftSheep = (props: MinecraftSheepProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const woolMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        }

        // Rainbow wool animation
        if (woolMaterialRef.current) {
            const hue = (state.clock.elapsedTime * 0.1) % 1;
            woolMaterialRef.current.color.setHSL(hue, 0.8, 0.6);
        }
    });

    return (
        <group ref={groupRef} {...props}>
            {/* Body (wool) */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.2, 0.8, 1.8]} />
                <meshStandardMaterial
                    ref={woolMaterialRef}
                    roughness={0.8}
                />
            </mesh>

            {/* Head */}
            <mesh position={[0, 0.3, 1.1]}>
                <boxGeometry args={[0.6, 0.6, 0.6]} />
                <meshStandardMaterial color="#f0f0f0" />
            </mesh>

            {/* Legs */}
            <mesh position={[0.4, -0.6, 0.6]}>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color="#303030" />
            </mesh>
            <mesh position={[-0.4, -0.6, 0.6]}>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color="#303030" />
            </mesh>
            <mesh position={[0.4, -0.6, -0.6]}>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color="#303030" />
            </mesh>
            <mesh position={[-0.4, -0.6, -0.6]}>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color="#303030" />
            </mesh>

            {/* Eyes */}
            <mesh position={[0.2, 0.4, 1.4]}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[-0.2, 0.4, 1.4]}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
        </group>
    );
};

export default MinecraftSheep;