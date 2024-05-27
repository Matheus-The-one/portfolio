'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Avatar: React.FC = () => {
    return (
        <Canvas style={{ height: '200px', width: '65%' }}>
            <AvatarModel />
        </Canvas>
    );
};

export const AvatarModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/avatarmale.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
            
        }
    });

    return (
        <>
              <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};