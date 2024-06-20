'use client';
import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export const ModelAI: React.FC = () => {
    return (
        <Canvas style={{ height: '500px', width: '500px' }}>
            <EthereumModel />
        </Canvas>
    );
};

export const EthereumModel: React.FC = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/watsonn.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions && actions.Animation) {
            actions.Animation.play();
        }
    }, [actions]);
    
    useEffect(() => {
        console.log(nodes); // Log the nodes to identify the names
    }, [nodes]);

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[1, 1, 0.8]} intensity={0.5} />
            <group ref={group} scale={[1,1,1]} rotation={[Math.PI / 6,0,0]}>
                {Object.values(nodes).map((node, index) => (
                    <primitive key={index} object={node} />
                ))}
            </group>
        </>
    );
};

