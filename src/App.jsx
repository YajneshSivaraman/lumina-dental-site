import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Treatments from './components/Treatments'
import Shift from './components/Shift'
import Booking from './components/Booking'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-linear-to-r from-neon via-hot to-ice" style={{ scaleX }} />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero /><Marquee /><Stats /><Treatments /><Shift /><Booking /><Visit />
      </main>
      <div className="relative z-10"><Footer /></div>
    </MotionConfig>
  )
}