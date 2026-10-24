import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { clinic } from '../data/clinic'

export default function Booking() {
  const [name, setName] = useState('')
  const [pick, setPick] = useState(clinic.treatments[0].name)
  const send = (e) => {
    e.preventDefault()
    const text = `Hello ${clinic.name}, Iâ€™m ${name}. Iâ€™d like to book an appointment for ${pick}.`
    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  return (
    <section id="book" className="px-4 py-24 md:px-12">
      <motion.form onSubmit={send} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="glass relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] p-8 md:p-12">
        <div className="absolute -left-20 -top-20 size-64 rounded-full bg-hot/30 blur-3xl" />
        <div className="relative">
          <h2 className="mb-2 font-display text-3xl font-black md:text-5xl">Reserve your visit</h2>
          <p className="mb-8">Pick a treatment. WhatsApp opens with your request ready to send.</p>
          <label className="mb-6 grid gap-2 font-semibold text-white">Your name
            <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 font-normal text-white outline-none transition focus:border-ice" />
          </label>
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Treatment">
            {clinic.treatments.map((t) => (
              <button type="button" key={t.name} aria-pressed={pick === t.name} onClick={() => setPick(t.name)}
                className={`rounded-full border px-4 py-2 text-sm transition ${pick === t.name ? 'border-transparent bg-linear-to-r from-neon to-hot text-white' : 'border-white/20 hover:border-ice'}`}>
                {t.name}
              </button>
            ))}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-neon to-hot px-8 py-4 font-semibold text-white shadow-[0_0_34px_#ff4fa388] transition hover:scale-105">
            <MessageCircle size={18} /> Send on WhatsApp
          </button>
        </div>
      </motion.form>
    </section>
  )
}
