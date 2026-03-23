import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group } from "three";
import styles from "./heroScene.module.scss";

type NavigatorWithDeviceMemory = Navigator & { deviceMemory?: number };

const canUseWebGL = (): boolean => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

function FloatingCluster() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }
    groupRef.current.rotation.y += delta * 0.14;
    groupRef.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh position={[-1.2, 0.45, -0.7]}>
          <sphereGeometry args={[0.88, 48, 48]} />
          <meshStandardMaterial color="#f9c955" metalness={0.35} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh position={[1.5, -0.2, -0.2]}>
          <icosahedronGeometry args={[0.58, 2]} />
          <meshStandardMaterial color="#8bd3ff" metalness={0.2} roughness={0.3} />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.9} floatIntensity={1.2}>
        <mesh position={[0.25, 1.05, 0.2]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#ffd36a" metalness={0.28} roughness={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

function HeroScene() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nav = window.navigator as NavigatorWithDeviceMemory;
    const lowPower =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (nav.deviceMemory && nav.deviceMemory <= 4);

    setIsEnabled(!motionQuery.matches && !lowPower && canUseWebGL());
    setChecked(true);
  }, []);

  const fallbackBubbles = useMemo(() => [styles.bubbleA, styles.bubbleB, styles.bubbleC], []);

  if (checked && !isEnabled) {
    return (
      <div className={styles.fallback} aria-hidden="true">
        {fallbackBubbles.map((bubble) => (
          <span key={bubble} className={`${styles.bubble} ${bubble}`} />
        ))}
      </div>
    );
  }

  if (!checked) {
    return <div className={styles.fallback} aria-hidden="true" />;
  }

  return (
    <div className={styles.canvasWrap} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 52 }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[2, 3, 4]} intensity={1.3} color="#ffe2a7" />
        <pointLight position={[-2, -1, 2]} intensity={0.6} color="#7bc7ff" />
        <FloatingCluster />
        <Sparkles count={35} scale={6} size={2.3} speed={0.55} color="#ffe2a7" />
      </Canvas>
    </div>
  );
}

export default HeroScene;
