import { useState } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

const spots = [[50, 70], [140, 100], [230, 62], [320, 105], [95, 92], [275, 88]]

const Teeth = ({ color, stained }) => (
  <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="size-full">
    <rect width="400" height="160" fill="#a3274f" />
    {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={18 + i * 45} y={28} width={38} height={104} rx={17} fill={color} />)}
    {stained && spots.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r={6} fill="#7a5a1e" opacity=".55" />)}
  </svg>
)

export default function Shift() {
  const [v, setV] = useState(50)
  return (
    <section id="shift" className="px-4 py-24 md:px-12">
      <h2 className="mb-3 font-display text-4xl font-black md:text-6xl">The whitening difference</h2>
      <p className="mb-10 max-w-[50ch]">Drag the slider to compare.</p>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="relative mx-auto aspect-[5/2] max-w-3xl select-none overflow-hidden rounded-3xl border border-white/15 shadow-[0_0_60px_#7c5cff55]">
        <Teeth color="#fff" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}><Teeth color="#cdb46a" stained /></div>
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-sm text-white">Before</span>
        <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white">After</span>
        <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: `${v}%` }}>
          <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-void shadow-[0_0_30px_#fff]"><MoveHorizontal size={22} /></span>
        </div>
        <input type="range" min="0" max="100" value={v} onChange={(e) => setV(+e.target.value)} aria-label="Compare before and after whitening" className="absolute inset-0 size-full cursor-ew-resize opacity-0" />
      </motion.div>
    </section>
  )
}
