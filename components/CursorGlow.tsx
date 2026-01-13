'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.06), rgba(139, 92, 246, 0.04) 40%, transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
      style={{
        mixBlendMode: 'screen',
      }}
    />
  );
}
