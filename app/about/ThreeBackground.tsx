// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, Icosahedron, Torus, MeshDistortMaterial, Sphere } from "@react-three/drei";
// import React, { useRef } from "react";
// import * as THREE from "three";

// function AnimatedShape({ position, color }: any) {
//   const ref = useRef<THREE.Mesh>(null!);

//   useFrame((state) => {
//     ref.current.rotation.x += 0.003;
//     ref.current.rotation.y += 0.004;
//   });

//   return (
//     <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
//       {React.createElement(
//         'mesh' as any,
//         { ref: ref, position: position },
//         React.createElement('icosahedronGeometry' as any, { args: [1, 1] }),
//         React.createElement(MeshDistortMaterial, { color: color, distort: 0.4, speed: 2, roughness: 0 })
//       )}
//     </Float>
//   );
// }

// export default function ThreeBackground() {
//   return (
//     <div className="absolute inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 8] }}>
//         <ambientLight color={0xffffff} intensity={0.8} />
//         <directionalLight color={0xffffff} intensity={1} position={[3, 3, 3]} />

//         <AnimatedShape position={[-3, 1, 0]} color="#6366f1" />
//         <AnimatedShape position={[3, -1, 0]} color="#22d3ee" />
        
//         <Float speed={1.5}>
//           <mesh position={[0, 2, -2]}>
//             <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
//             <meshStandardMaterial color="#a855f7" metalness={0.6} roughness={0.2} />
//           </mesh>
//         </Float>

//         <Float speed={2}>
//           <Sphere args={[0.7, 64, 64]} position={[0, -2, -1]}>
//             <meshStandardMaterial color="#06b6d4" wireframe />
//           </Sphere>
//         </Float>
//       </Canvas>
//     </div>
//   );
// }