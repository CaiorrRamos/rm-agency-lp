import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiArrowUpRight } from 'react-icons/fi'
import { smoothTransition } from '../../../utils/animations'

type ContactCardProps = {
  icon: IconType
  title: string
  description: string
  href: string
}

export function ContactCard({
  icon: Icon,
  title,
  description,
  href,
}: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="group grid min-h-[112px] grid-cols-[auto_1fr_auto] items-center gap-5 rounded-[26px] border border-white/[0.08] bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_50px_rgba(0,0,0,0.18)] outline-none backdrop-blur-2xl transition duration-300 hover:border-[#B2F828]/28 hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-[#B2F828]/30"
      whileHover={{
        y: -4,
        boxShadow:
          '0 24px 70px rgba(0,0,0,0.34), 0 0 0 1px rgba(178,248,40,0.16)',
      }}
      whileTap={{ scale: 0.99 }}
      transition={smoothTransition(0.35)}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.06] text-2xl text-[#B2F828] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Icon aria-hidden="true" />
      </span>
      <span>
        <span className="block text-base font-medium text-white">{title}</span>
        <span className="mt-1.5 block text-sm leading-5 text-white/50">
          {description}
        </span>
      </span>
      <FiArrowUpRight
        aria-hidden="true"
        className="text-lg text-white/42 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#B2F828]"
      />
    </motion.a>
  )
}
