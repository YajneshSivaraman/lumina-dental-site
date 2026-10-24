import { useId } from 'react'

export default function Logo({ size = 36 }) {
  const id = useId()
  return (
    <svg height={size} viewBox="0 0 200 240" className="w-auto" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#efe8da" />
          <stop offset="1" stopColor="#b08d5b" />
        </linearGradient>
      </defs>
      <path
        d="M60 20C30 20 15 45 20 80c4 30 20 50 22 90 2 40 10 55 24 55 16 0 18-35 34-35s18 35 34 35c14 0 22-15 24-55 2-40 18-60 22-90 5-35-10-60-40-60-16 0-28 10-40 10S76 20 60 20Z"
        fill="none" stroke={`url(#${id})`} strokeWidth="9" strokeLinejoin="round"
      />
      <path d="M52 56c8-8 20-8 28-2" fill="none" stroke={`url(#${id})`} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}