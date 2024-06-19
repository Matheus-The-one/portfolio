'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelAI: React.FC = () => {
    return (
        <Canvas style={{ height: '200px', width: '65%' }}>
            <EthereumModel />
        </Canvas>
    );
};

export const EthereumModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/robot_playground.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        
    });

    return (
        <>
              <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};