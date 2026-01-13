'use client'

import { usePathname } from 'next/navigation'
import InteractiveGrid from './InteractiveGrid'

export default function ConditionalGrid() {
  const pathname = usePathname()
  
  // Pages où on ne veut pas la grille
  const hideGridOn = ['/contact', '/a-propos']
  
  if (hideGridOn.includes(pathname)) {
    return null
  }
  
  return <InteractiveGrid />
}
