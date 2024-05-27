'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Group } from 'three';

export const Avatar: React.FC = () => {
    return (
        <Canvas style={{ height: '200px', width: '55%' }}>
            <ambientLight intensity={0.5} color="#ffffff" />
            <directionalLight position={[0, 10, 5]} intensity={1} color="#ffffff" />
            <AvatarModel />
        </Canvas>
    );
};

export const AvatarModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/avatarmale.glb');
    const modelRef = useRef<Group>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
        }
    });

    return <primitive object={myModel.scene} ref={modelRef} />;
};

