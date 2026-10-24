import { Phone, MessageCircle } from 'lucide-react'
import { clinic } from '../data/clinic'

export default function Footer() {
  return (
    <>
      <footer className="overflow-hidden px-4 pb-24 pt-16 text-center md:pb-10">
        <p aria-hidden className="outline-text whitespace-nowrap font-display text-[17vw] font-black leading-none">LUMINA</p>
        <p className="mt-6 text-sm">Â© {new Date().getFullYear()} {clinic.name}</p>
      </footer>
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 md:hidden">
        <a href={`tel:+${clinic.whatsapp}`} className="glass flex items-center justify-center gap-2 rounded-full p-4 font-semibold text-white"><Phone size={18} /> Call</a>
        <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-neon to-hot p-4 font-semibold text-white"><MessageCircle size={18} /> WhatsApp</a>
      </div>
    </>
  )
}
