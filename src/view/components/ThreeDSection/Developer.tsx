import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as React from 'react';
import * as THREE from 'three';

interface DeveloperProps {
    animationName?: string;
    [key: string]: any;
}

const Developer = ({ animationName = 'idle', ...props }: DeveloperProps) => {
    const group = useRef<THREE.Group>(null!);
    
    // Load the model
    const { scene, animations } = useGLTF('/models/animations/developer.glb');
    
    // Clone the scene to avoid conflicts with multiple instances
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    
    // Setup animations
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        // If no specific animation requested, just play the first available
        if (names.length === 0) return;
        
        const actionName = names.includes(animationName) ? animationName : names[0];
        
        if (actions[actionName]) {
            actions[actionName]!.reset().fadeIn(0.5).play();
            
            return () => {
                actions[actionName]?.fadeOut(0.5).stop();
            };
        }
    }, [animationName, actions, names]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={clone} />
        </group>
    );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
