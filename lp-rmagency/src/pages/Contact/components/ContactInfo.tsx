import { FaBehance, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { budgetWhatsappLink } from '../../../content/site'
import { ContactCard } from './ContactCard'

const contactMethods = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    description: 'Briefings rápidos e próximos passos.',
    href: budgetWhatsappLink,
  },
  {
    icon: FaInstagram,
    title: 'Instagram',
    description: 'Conteúdo, bastidores e lançamentos.',
    href: 'https://www.instagram.com/rmagency.co/',
  },
  {
    icon: FaBehance,
    title: 'Behance',
    description: 'Portfólio visual e estudos de caso.',
    href: 'https://www.behance.net/',
  },
]

export function ContactInfo() {
  return (
    <aside className="relative grid w-full max-w-[520px] gap-5 justify-self-center lg:justify-self-end lg:pl-10">
      <div className="pointer-events-none absolute inset-y-4 left-0 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/42">
          Outros canais
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-4">
        {contactMethods.map((method) => (
          <ContactCard key={method.title} {...method} />
        ))}
      </div>
    </aside>
  )
}
