import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { clinic } from '../data/clinic'

function Card({ t, i }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 })
  const Icon = t.icon
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5)
  }
  return (
    <motion.div style={{ rotateX, rotateY, transformPerspective: 800 }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }}
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
      className="glass group relative overflow-hidden rounded-3xl p-7 transition-colors hover:border-neon/60">
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-neon/30 blur-3xl transition group-hover:bg-hot/40" />
      <div className="relative">
        <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-linear-to-br from-neon to-hot text-white shadow-[0_0_24px_#7c5cff88]"><Icon size={26} /></span>
        <h3 className="mb-2 text-lg font-bold">{t.name}</h3>
        <p>{t.note}</p>
      </div>
    </motion.div>
  )
}

export default function Treatments() {
  return (
    <section id="treatments" className="px-4 py-24 md:px-12">
      <h2 className="mb-12 font-display text-4xl font-black md:text-6xl">Treatments</h2>
      <div className="grid gap-5 md:grid-cols-3">{clinic.treatments.map((t, i) => <Card key={t.name} t={t} i={i} />)}</div>
    </section>
  )
}
