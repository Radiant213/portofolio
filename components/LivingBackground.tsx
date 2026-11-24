"use client";

import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function LivingBackground() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics for mouse glow
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Drifting Architectural Dot Grid Layer */}
      <div 
        className="absolute inset-0 architectural-dots opacity-[0.045]"
        style={{
          backgroundPosition: "0 0",
        }}
      />

      {/* Smooth Cursor-Following Ambient Radial Glow (Desktop pointer only) */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: smoothX,
          top: smoothY,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.065) 0%, rgba(56, 189, 248, 0.015) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
