"use client"; // Ajoutez cette ligne en haut du fichier

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function FactoryModel(props) {
  const { nodes, materials } = useGLTF("/models/ocean.glb"); // Assurez-vous que le chemin est correct
  console.log(nodes);
  const factoryRef = useRef();
  // Rotation de la géométrie
  useFrame(() => {
    if (factoryRef.current) {
      factoryRef.current.rotation.y += 0.01; // Ajustez la vitesse de rotation ici
    }
  });

  return (
    <group ref={factoryRef} {...props} dispose={null}>
      <mesh
        geometry={nodes["Cube.000_0"].geometry} // Utilisez le nom correct du nœud de géométrie
        material={materials.initialShadingGroup} // Vérifiez si le matériau est correct
        position={[0, -3.867, 0]} // Ajustez la position selon vos besoins
        rotation={[-Math.PI / 2, 0, 0]} // Ajustez la rotation selon vos besoins
      />
    </group>
  );
}

useGLTF.preload("/models/ocean.glb");
