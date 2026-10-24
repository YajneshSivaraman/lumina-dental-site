import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { clinic } from '../data/clinic'
import Logo from './Logo'

export default function Navbar() {
  return (
    <motion.header initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass fixed inset-x-4 top-4 z-50 mx-auto flex max-w-5xl items-center gap-6 rounded-full px-5 py-3">
      <a href="#top" className="mr-auto font-display text-sm font-bold text-white">{clinic.name}</a>
      <nav className="hidden gap-6 text-sm md:flex" aria-label="Main">
        {[['Treatments', '#treatments'], ['Glow up', '#shift'], ['Visit', '#visit']].map(([l, h]) => (
          <a key={h} href={h} className="transition hover:text-ice">{l}</a>
        ))}
      </nav>
     <a href="#top" className="mr-auto flex items-center gap-3 font-display text-sm font-bold text-white">
  <Logo /> {clinic.name}
</a>
    </motion.header>
  )
}
