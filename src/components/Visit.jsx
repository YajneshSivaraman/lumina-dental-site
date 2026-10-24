import { MapPin, Phone, Clock } from 'lucide-react'
import { clinic } from '../data/clinic'

export default function Visit() {
  const Row = ({ icon: Icon, children }) => (
    <p className="mb-4 flex items-start gap-3"><Icon size={20} className="mt-1 shrink-0 text-hot" /><span>{children}</span></p>
  )
  return (
    <section id="visit" className="grid gap-10 px-4 py-24 md:grid-cols-[1fr_1.3fr] md:px-12">
      <div>
        <h2 className="mb-8 font-display text-4xl font-black md:text-5xl">Find us</h2>
        <Row icon={MapPin}>{clinic.address}</Row>
        <Row icon={Phone}><a href={`tel:+${clinic.whatsapp}`} className="text-white">{clinic.phone}</a></Row>
        {clinic.hours.map(([d, h]) => <Row key={d} icon={Clock}><b className="text-white">{d}</b> {h}</Row>)}
      </div>
      <iframe title={`Map to ${clinic.name}`} loading="lazy" className="min-h-80 w-full rounded-3xl border border-white/15"
        style={{ filter: 'invert(92%) hue-rotate(180deg) saturate(.8)' }}
        src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.name + ' ' + clinic.address)}&output=embed`} />
    </section>
  )
}
