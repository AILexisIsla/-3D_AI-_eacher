"use client"
import { Box, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";


export const Experience = () => {
    return (
    <>
    <OrbitControls/>
    <mesh>
        
        <boxGeometry/>
        <meshNormalMaterial/>
          
    </mesh>
    </>
    )
}