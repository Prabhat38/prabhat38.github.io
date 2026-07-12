'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 80;
const EDGE_THRESHOLD = 2.8;
const PULSE_COUNT = 40;

function buildNodePositions(seed: number): Float32Array {
  const positions = new Float32Array(NODE_COUNT * 3);
  let rng = seed;
  const next = () => {
    rng = (rng * 1664525 + 1013904223) >>> 0;
    return (rng >>> 0) / 0xffffffff;
  };
  for (let i = 0; i < NODE_COUNT; i++) {
    positions[i * 3] = (next() - 0.5) * 18;
    positions[i * 3 + 1] = (next() - 0.5) * 11;
    positions[i * 3 + 2] = (next() - 0.5) * 3;
  }
  return positions;
}

interface Edge {
  i: number;
  j: number;
}

export function ParticleNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const instanceRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { pointer } = useThree();

  const nodePositions = useMemo(() => buildNodePositions(42), []);


  const edges = useMemo<Edge[]>(() => {
    const result: Edge[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodePositions[i * 3] - nodePositions[j * 3];
        const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
        const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < EDGE_THRESHOLD) {
          result.push({ i, j });
        }
      }
    }
    return result;
  }, [nodePositions]);

  const edgeGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach((edge, idx) => {
      positions[idx * 6] = nodePositions[edge.i * 3];
      positions[idx * 6 + 1] = nodePositions[edge.i * 3 + 1];
      positions[idx * 6 + 2] = nodePositions[edge.i * 3 + 2];
      positions[idx * 6 + 3] = nodePositions[edge.j * 3];
      positions[idx * 6 + 4] = nodePositions[edge.j * 3 + 1];
      positions[idx * 6 + 5] = nodePositions[edge.j * 3 + 2];
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [edges, nodePositions]);

  const pulseState = useMemo(() => {
    if (edges.length === 0) return [];
    return Array.from({ length: PULSE_COUNT }, () => ({
      edgeIdx: Math.floor(Math.random() * edges.length),
      phase: Math.random(),
      speed: 0.25 + Math.random() * 0.35,
    }));
  }, [edges]);

  const pointTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(0,217,255,1)');
    gradient.addColorStop(0.4, 'rgba(0,217,255,0.6)');
    gradient.addColorStop(1, 'rgba(0,217,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(({ clock }) => {
    if (!instanceRef.current || !groupRef.current) return;

    const t = clock.getElapsedTime();

    pulseState.forEach((pulse, i) => {
      const edge = edges[pulse.edgeIdx];
      if (!edge) return;
      const progress = ((t * pulse.speed + pulse.phase) % 1 + 1) % 1;
      const ax = nodePositions[edge.i * 3];
      const ay = nodePositions[edge.i * 3 + 1];
      const az = nodePositions[edge.i * 3 + 2];
      const bx = nodePositions[edge.j * 3];
      const by = nodePositions[edge.j * 3 + 1];
      const bz = nodePositions[edge.j * 3 + 2];
      dummy.position.set(
        ax + (bx - ax) * progress,
        ay + (by - ay) * progress,
        az + (bz - az) * progress
      );
      dummy.scale.setScalar(0.9 + Math.sin(t * 3 + i) * 0.1);
      dummy.updateMatrix();
      instanceRef.current!.setMatrixAt(i, dummy.matrix);
    });
    instanceRef.current.instanceMatrix.needsUpdate = true;

    groupRef.current.rotation.x +=
      (pointer.y * 0.06 - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.y +=
      (pointer.x * 0.1 - groupRef.current.rotation.y) * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Node points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          map={pointTexture}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Edge lines */}
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial
          color="#00D9FF"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Data pulse particles */}
      {edges.length > 0 && (
        <instancedMesh ref={instanceRef} args={[undefined, undefined, PULSE_COUNT]}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshBasicMaterial
            color="#00D9FF"
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </instancedMesh>
      )}
    </group>
  );
}
