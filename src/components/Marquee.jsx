import { Sparkles } from 'lucide-react'
import { clinic } from '../data/clinic'

const Row = ({ cls, outline }) => (
  <div className="overflow-hidden py-2">
    <div className={`flex w-max gap-10 ${cls} motion-reduce:animate-none`}>
      {[...clinic.treatments, ...clinic.treatments].map((t, i) => (
        <span key={i} className={`inline-flex items-center gap-10 whitespace-nowrap font-display text-4xl font-black uppercase md:text-6xl ${outline ? 'outline-text' : 'text-white'}`}>
          {t.name}<Sparkles size={34} className="text-hot" />
        </span>
      ))}
    </div>
  </div>
)

export default function Marquee() {
  return (
    <div aria-hidden className="-rotate-2 border-y border-white/10 bg-white/[0.03] py-4">
      <Row cls="animate-slide" />
      <Row cls="animate-slide-rev" outline />
    </div>
  )
}
