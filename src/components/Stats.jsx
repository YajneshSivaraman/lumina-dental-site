import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { clinic } from '../data/clinic'

function Count({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2.2, ease: 'easeOut',
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('en-IN') + suffix } })
    return () => c.stop()
  }, [inView, to, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
  return (
    <section className="grid grid-cols-1 gap-4 px-4 py-24 md:grid-cols-3 md:px-12">
      {clinic.stats.map((s) => (
        <div key={s.l} className="glass rounded-3xl p-8 text-center">
          <strong className="block bg-linear-to-r from-neon to-hot bg-clip-text font-display text-5xl font-black text-transparent md:text-6xl">
            <Count to={s.n} suffix={s.s} />
          </strong>
          <span className="mt-2 block">{s.l}</span>
        </div>
      ))}
    </section>
  )
}
