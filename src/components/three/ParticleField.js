/* eslint-disable react-hooks/set-state-in-effect, react-hooks/purity, react-hooks/immutability */
'use client';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 600, mouse }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = (Math.random() * 3 + 0.5) * 0.7; // Reduced size/glow by 30%
      speeds[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, sizes, speeds };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color('#3B82F6') },
      uColor2: { value: new THREE.Color('#8B5CF6') },
    }),
    []
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    uniforms.uTime.value = time;
    uniforms.uMouse.value.set(mouse.current.x * 5, mouse.current.y * 5);

    if (mesh.current) {
      mesh.current.rotation.y = time * 0.02;
      mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1;
    }
  });

  const vertexShader = `
    attribute float aSize;
    attribute float aSpeed;
    uniform float uTime;
    uniform vec2 uMouse;
    varying float vAlpha;
    varying float vColorMix;

    void main() {
      vec3 pos = position;
      
      // Floating animation
      pos.y += sin(uTime * aSpeed + pos.x * 0.5) * 0.3;
      pos.x += cos(uTime * aSpeed * 0.7 + pos.y * 0.3) * 0.2;
      pos.z += sin(uTime * aSpeed * 0.5 + pos.z) * 0.15;
      
      // Mouse interaction - gentle attraction
      vec2 toMouse = uMouse - pos.xy;
      float dist = length(toMouse);
      if (dist < 3.0) {
        pos.xy += toMouse * 0.02 * (1.0 - dist / 3.0);
      }

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = aSize * (200.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
      
      vAlpha = 0.4 + 0.6 * (1.0 - length(pos.xy) / 12.0);
      vColorMix = (sin(pos.x * 0.5 + uTime * 0.3) + 1.0) * 0.5;
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    uniform vec3 uColor2;
    varying float vAlpha;
    varying float vColorMix;

    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      
      float alpha = smoothstep(0.5, 0.1, d) * vAlpha * 0.35; // Reduced opacity by ~40%
      vec3 color = mix(uColor, uColor2, vColorMix);
      gl_FragColor = vec4(color, alpha);
    }
  `;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          count={count}
          array={particles.speeds}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ConnectionLines({ count = 600, mouse }) {
  const linesRef = useRef();
  const positionsRef = useRef(new Float32Array(count * 3));

  useFrame((state) => {
    // Lines are drawn between nearby particles — simplified for performance
    // This adds the neural-network visual effect
  });

  return null; // Lines handled by particle glow for performance
}

export default function ParticleField() {
  const mouse = useRef({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    const handleMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  if (!isClient) return null;

  // CSS fallback for mobile
  if (isMobile) {
    return (
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.06) 0%, transparent 60%)',
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }} />
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <Particles count={500} mouse={mouse} />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
}
