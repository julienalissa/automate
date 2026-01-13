'use client'

import { useEffect, useRef, useState } from 'react'

export default function InteractiveGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [dimensions, setDimensions] = useState({ cols: 30, rows: 30 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gridSize = 50
    const updateDimensions = () => {
      setDimensions({
        cols: Math.ceil(window.innerWidth / gridSize) + 4,
        rows: Math.ceil(window.innerHeight / gridSize) + 4
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const gridSize = 50 // Taille des carreaux
  const { cols, rows } = dimensions

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ transform: 'rotate(-2deg) scale(1.1)' }}
    >
      <svg
        className="w-full h-full"
        style={{ 
          filter: 'contrast(1.05) brightness(1.02)',
        }}
      >
        <defs>
          {/* Définir le pattern de base */}
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Lignes verticales et horizontales */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={gridSize}
              stroke="rgba(220, 38, 38, 0.18)"
              strokeWidth="1.5"
            />
            <line
              x1="0"
              y1="0"
              x2={gridSize}
              y2="0"
              stroke="rgba(220, 38, 38, 0.18)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>

        {/* Fond avec pattern */}
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />

        {/* Carreaux interactifs */}
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const x = col * gridSize
            const y = row * gridSize
            const dx = mousePos.x - x
            const dy = mousePos.y - y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 200
            
            let opacity = 0
            let strokeWidth = 1.5
            let fillOpacity = 0
            
            if (distance < maxDistance) {
              const intensity = 1 - distance / maxDistance
              opacity = intensity * 0.6
              strokeWidth = 1.5 + intensity * 2
              fillOpacity = intensity * 0.08
            }

            return (
              <g key={`${row}-${col}`}>
                {/* Carreaux qui s'illuminent */}
                <rect
                  x={x}
                  y={y}
                  width={gridSize}
                  height={gridSize}
                  fill={`rgba(220, 38, 38, ${fillOpacity})`}
                  stroke={`rgba(220, 38, 38, ${opacity})`}
                  strokeWidth={strokeWidth}
                  style={{
                    transition: 'all 0.2s ease-out',
                  }}
                />
                {/* Lueur supplémentaire pour les carreaux très proches */}
                {distance < maxDistance / 2 && (
                  <>
                    <rect
                      x={x + 2}
                      y={y + 2}
                      width={gridSize - 4}
                      height={gridSize - 4}
                      fill={`rgba(239, 68, 68, ${opacity * 0.15})`}
                      style={{
                        filter: 'blur(6px)',
                        transition: 'all 0.2s ease-out',
                      }}
                    />
                  </>
                )}
              </g>
            )
          })
        )}
      </svg>
    </div>
  )
}
