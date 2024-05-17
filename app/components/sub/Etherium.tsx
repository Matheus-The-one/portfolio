'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
    return (
        <Canvas style={{ height: '100px', width: '35%' }}>
            <EthereumModel />
        </Canvas>
    );
};

export const EthereumModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/ethereum_logo_3d.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
            modelRef.current.rotation.x += delta / 2
        }
    });

    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#000000" intensity={8000} />
            <pointLight position={[10, 10, 10]} color="#7F00FF" intensity={5000} />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};