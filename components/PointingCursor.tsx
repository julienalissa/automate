'use client'

import React, { useState, useEffect, useRef } from 'react'

const PointingCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [angle, setAngle] = useState(0)
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [distance, setDistance] = useState(0)
  const [isOverTarget, setIsOverTarget] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const targetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setIsMounted(true)
    
    // Trouver l'élément email après le montage
    const findEmailElement = () => {
      const emailElement = document.querySelector('[data-pointing-target="email"]')
      if (emailElement instanceof HTMLElement) {
        targetRef.current = emailElement
      }
    }

    // Attendre un peu pour que le DOM soit prêt
    setTimeout(findEmailElement, 100)

    const updateCursorAngle = (e: MouseEvent) => {
      // Calculer l'angle entre le curseur et l'élément email
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect()
        // Centre du bloc email
        const targetX = rect.left + rect.width / 2
        const targetY = rect.top + rect.height / 2

        setTargetPosition({ x: targetX, y: targetY })

        const deltaX = targetX - e.clientX
        const deltaY = targetY - e.clientY
        const angleRad = Math.atan2(deltaY, deltaX)
        const angleDeg = angleRad * (180 / Math.PI)
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        setAngle(angleDeg)
        setDistance(dist)

        // Vérifier si le curseur est sur la carte email
        const isInside = e.clientX >= rect.left && 
                        e.clientX <= rect.right && 
                        e.clientY >= rect.top && 
                        e.clientY <= rect.bottom
        setIsOverTarget(isInside)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      updateCursorAngle(e)
    }

    const handleScroll = () => {
      // Recalculer l'angle lors du défilement
      const lastMouseEvent = new MouseEvent('mousemove', {
        clientX: position.x,
        clientY: position.y
      })
      updateCursorAngle(lastMouseEvent as MouseEvent)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [position.x, position.y])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <style jsx global>{`
        body.pointing-cursor-active {
          cursor: none !important;
        }
        body.pointing-cursor-active * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Ligne pointillée vers la cible */}
      {distance > 100 && (
        <svg
          className="pointing-line"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line
            x1={position.x}
            y1={position.y}
            x2={targetPosition.x}
            y2={targetPosition.y}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="8 4"
            className="pointing-line-animate"
          />
        </svg>
      )}

      <div
        className="pointing-cursor"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) rotate(${angle}deg) ${isOverTarget ? 'scale(1.3)' : 'scale(1)'}`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow" x="-20" y="-20" width="120" height="120">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.5"/>
            </filter>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isOverTarget ? "#10B981" : "#1D4ED8"} />
              <stop offset="50%" stopColor={isOverTarget ? "#34D399" : "#3B82F6"} />
              <stop offset="100%" stopColor={isOverTarget ? "#6EE7B7" : "#60A5FA"} />
            </linearGradient>
          </defs>
          <g filter="url(#shadow)" className={isOverTarget ? "pointing-arrow-active" : "pointing-arrow-pulse"}>
            {/* Corps principal de la flèche pointant vers la droite */}
            <path
              d="M10 40 L55 40 L55 25 L70 40 L55 55 L55 40 Z"
              fill="url(#arrowGradient)"
              stroke="white"
              strokeWidth="3"
            />
            {/* Cercle de départ */}
            <circle cx="10" cy="40" r="6" fill="white" stroke={isOverTarget ? "#10B981" : "#3B82F6"} strokeWidth="2" />
          </g>
        </svg>
        {isOverTarget && (
          <div 
            className="pointing-text pointing-text-active" 
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '45px',
              marginLeft: '0px',
            }}
          >
            <span style={{ 
              display: 'inline-block',
              transform: `rotate(${-angle}deg)`
            }}>
              ✅ Cliquez ici
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default PointingCursor
