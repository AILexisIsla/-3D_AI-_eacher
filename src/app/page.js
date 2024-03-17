"use client"
import { Experience } from "@/components/Experiences";
import { Canvas } from "@react-three/fiber";


export default function Home() {
  return (
    <main className="h-screen min-h-screen">
      <Canvas><Experience/></Canvas>
      
     </main>
  );
}
