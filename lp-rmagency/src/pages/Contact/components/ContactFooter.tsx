import logo from '../../../assets/Logo.svg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { budgetWhatsappLink } from '../../../content/site'

export function ContactFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-5 pb-8 pt-8 text-sm text-white/46 md:flex-row md:items-center md:justify-between md:px-8">
      <a href="/" aria-label="RM Agency Home" className="inline-flex w-fit">
        <img src={logo} alt="RM Agency" className="h-8 w-auto opacity-86" />
      </a>

      <nav aria-label="Rodapé contato">
        <ul className="flex flex-wrap gap-5">
          <li><a href="/" className="transition hover:text-white">Navigation</a></li>
          <li><a href="/#solutions" className="transition hover:text-white">Services</a></li>
          <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
          <li><a href="/privacy" className="transition hover:text-white">Privacy Policy</a></li>
          <li><a href="/terms" className="transition hover:text-white">Terms</a></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <a href={budgetWhatsappLink} aria-label="WhatsApp" className="transition hover:text-[#B2F828]">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/rmagency.co/" aria-label="Instagram" className="transition hover:text-[#B2F828]">
          <FaInstagram />
        </a>
        <a href="mailto:contato@rmagency.co" aria-label="Email" className="transition hover:text-[#B2F828]">
          <FiMail />
        </a>
        <span className="hidden md:inline">©2026</span>
      </div>
    </footer>
  )
}
