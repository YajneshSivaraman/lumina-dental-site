import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { clinic } from '../data/clinic'

const ease = [0.16, 1, 0.3, 1]

const Line = ({ children, delay }) => (
  <span className="block overflow-hidden pb-2">
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.2, delay, ease }}>
      {children}
    </motion.span>
  </span>
)

const facts = ['Painless by design', 'Same-day appointments', 'Digital 3D scanning']

function Tooth() {
  return (
    <svg viewBox="0 0 200 240" className="relative z-10 w-44 md:w-56" role="img" aria-label="Line illustration of a tooth">
      <defs>
        <linearGradient id="hero-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#efe8da" /><stop offset="1" stopColor="#b08d5b" />
        </linearGradient>
      </defs>
      <motion.path
        d="M60 20C30 20 15 45 20 80c4 30 20 50 22 90 2 40 10 55 24 55 16 0 18-35 34-35s18 35 34 35c14 0 22-15 24-55 2-40 18-60 22-90 5-35-10-60-40-60-16 0-28 10-40 10S76 20 60 20Z"
        fill="none" stroke="url(#hero-brass)" strokeWidth="2" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: 'easeInOut' }}
      />
      <motion.path
        d="M52 56c8-8 20-8 28-2" fill="none" stroke="url(#hero-brass)" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.4, duration: 1 }}
      />
    </svg>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 90])

  return (
    <section id="top" className="relative grid min-h-screen items-center gap-12 overflow-hidden px-4 pb-20 pt-36 md:grid-cols-[1.2fr_1fr] md:px-12">
      <div>
        <h1 className="text-[2.8rem] font-light leading-[1.02] md:text-[5.5rem]" aria-label="Precision dentistry. Painless by design.">
          <Line delay={0.2}>Precision dentistry.</Line>
          <Line delay={0.4}>Painless by design.</Line>
        </h1>
        <motion.p className="mb-10 mt-8 max-w-[46ch] text-lg" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease }}>
          Root canals, aligners, implants and whitening in Madurai, from a team that explains every step before it begins.
        </motion.p>
        <motion.div className="flex flex-wrap items-center gap-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1, ease }}>
          <a href="#book" className="group inline-flex items-center gap-3 rounded-full bg-ice px-7 py-4 font-semibold text-void transition hover:bg-neon">
            Book a consultation
            <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-white transition hover:border-neon hover:text-neon">
            <MessageCircle size={18} /> Message on WhatsApp
          </a>
        </motion.div>
        <motion.ul className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1.2 }}>
          {facts.map((f) => <li key={f}>{f}</li>)}
        </motion.ul>
      </div>

      <motion.div style={{ y }} className="relative mx-auto grid size-[19rem] place-items-center md:size-[30rem]">
        <div aria-hidden className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgb(217 189 143 / 0.16), transparent 65%)' }} />
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full">
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgb(255 255 255 / 0.07)" strokeWidth="0.2" />
        </svg>
        <motion.svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full" animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}>
          <circle cx="50" cy="50" r="49" fill="none" stroke="#d9bd8f" strokeWidth="0.35" strokeDasharray="0.3 12" strokeLinecap="round" />
        </motion.svg>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}><Tooth /></motion.div>
      </motion.div>
    </section>
  )
}