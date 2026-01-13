export default function Logo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="url(#gradient1)" />
      
      {/* Swiss Cross stylized */}
      <rect x="85" y="60" width="30" height="80" rx="4" fill="white" opacity="0.9" />
      <rect x="60" y="85" width="80" height="30" rx="4" fill="white" opacity="0.9" />
      
      {/* Flow/Automation element - circular arrows */}
      <g opacity="0.8">
        <path
          d="M140 100 L155 85 L145 85 L145 75 L130 90 L140 90 L140 100Z"
          fill="white"
        />
        <path
          d="M60 100 L45 115 L55 115 L55 125 L70 110 L60 110 L60 100Z"
          fill="white"
        />
      </g>
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
    </svg>
  )
}
