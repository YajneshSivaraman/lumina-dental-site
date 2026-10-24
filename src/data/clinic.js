import { ShieldCheck, Droplets, Smile, Gem, Sparkles, Baby } from 'lucide-react'

// Change only this file for each new clinic
export const clinic = {
  name: 'Lumina Dental Studio',
  doctor: 'Dr. A. Kumar, BDS, MDS',
  about: 'Gentle, honest dental care. We explain every step before we start and only recommend the treatment you actually need.',
  phone: '+91 70105 08392',
  whatsapp: '917010508392',
  address: 'Anna Nagar, Madurai, Tamil Nadu ',
  hours: [['Mon to Sat', '9 AM to 9 PM'], ['Sunday', '9 AM to 2 PM']],
  stats: [ // placeholders: use the clinic's real numbers
    { n: 12, s: '+', l: 'years of practice' },
    { n: 8500, s: '+', l: 'happy patients' },
    { n: 640, s: '', l: 'five-star reviews' },
  ],
  treatments: [
    { icon: ShieldCheck, name: 'Root canal', note: 'Painless, usually done in one or two visits.' },
    { icon: Droplets, name: 'Cleaning and scaling', note: 'Stains and tartar gone. Best every 6 months.' },
    { icon: Smile, name: 'Braces and aligners', note: 'Straighter teeth for teens and adults.' },
    { icon: Gem, name: 'Dental implants', note: 'A permanent replacement for missing teeth.' },
    { icon: Sparkles, name: 'Teeth whitening', note: 'Several shades brighter in a single visit.' },
    { icon: Baby, name: 'Kids dentistry', note: 'Calm, friendly care for first visits.' },
  ],
}