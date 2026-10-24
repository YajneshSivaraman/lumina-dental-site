import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-600), y = useMotionValue(-600)
  const sx = useSpring(x, { stiffness: 90, damping: 20 }), sy = useSpring(y, { stiffness: 90, damping: 20 })
  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 -ml-[230px] -mt-[230px] z-0 hidden size-[460px] rounded-full bg-neon/30 blur-3xl md:block" />
  )
}
