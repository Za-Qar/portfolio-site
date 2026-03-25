import { Canvas } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei';

interface SphereConfig {
  position: [number, number, number];
  scale: number;
  speed: number;
  distort: number;
}

function GoldenSphere({ position, scale, speed, distort }: SphereConfig) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#fed961"
          metalness={0.9}
          roughness={0.1}
          distort={distort}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

const spheres: SphereConfig[] = [
  { position: [2.5,   0,    0   ], scale: 1.4, speed: 1.5, distort: 0.3  },
  { position: [-2,    1,   -1   ], scale: 0.8, speed: 2.0, distort: 0.4  },
  { position: [0.5,  -1.5,  0.5 ], scale: 0.5, speed: 2.5, distort: 0.5  },
  { position: [-3.5, -0.5, -1   ], scale: 1.0, speed: 1.2, distort: 0.25 },
  { position: [4,    1.5,  -2   ], scale: 0.6, speed: 3.0, distort: 0.35 },
  { position: [-1,   2,   -0.5  ], scale: 0.4, speed: 2.8, distort: 0.45 },
  { position: [1.5,  2,   -1.5  ], scale: 0.7, speed: 1.8, distort: 0.3  },
];

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 5]} intensity={2} color="#fed961" />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />
      <Environment preset="city" />
      {spheres.map((props, i) => (
        <GoldenSphere key={i} {...props} />
      ))}
    </Canvas>
  );
}

export default HeroScene;
