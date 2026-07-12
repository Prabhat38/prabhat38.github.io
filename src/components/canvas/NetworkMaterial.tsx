'use client';

import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const PulseMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color('#00D9FF'),
    uOpacity: 0.18,
  },
  // vertex shader
  `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uOpacity;
    varying vec3 vPosition;
    void main() {
      gl_FragColor = vec4(uColor, uOpacity);
    }
  `
);
