import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CodeCubeProps {
    [key: string]: any;
}

const CodeCube = (props: CodeCubeProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        }

        // Rainbow color animation
        if (materialRef.current) {
            const hue = (state.clock.elapsedTime * 0.1) % 1;
            materialRef.current.color.setHSL(hue, 1, 0.5);
            materialRef.current.emissive.setHSL(hue, 1, 0.3);
        }
    });

    return (
        <group {...props}>
            <mesh ref={meshRef}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial
                    ref={materialRef}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={new THREE.Color(0xff0000)}
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Wireframe overlay */}
            <mesh rotation={meshRef.current?.rotation}>
                <boxGeometry args={[2.55, 2.55, 2.55]} />
                <meshBasicMaterial
                    color="#ffffff"
                    wireframe={true}
                    transparent={true}
                    opacity={0.2}
                />
            </mesh>
        </group>
    );
};

export default CodeCube;