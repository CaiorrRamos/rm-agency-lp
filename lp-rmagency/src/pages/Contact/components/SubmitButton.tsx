import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export function SubmitButton() {
  return (
    <motion.button
      type="submit"
      className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-[#B2F828]/40 bg-[#B2F828] px-7 text-sm font-semibold text-black shadow-[0_18px_46px_rgba(178,248,40,0.18),inset_0_1px_0_rgba(255,255,255,0.5)] outline-none transition duration-300 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#B2F828]/40 sm:w-auto"
      whileHover={{
        scale: 1.025,
        boxShadow:
          '0 22px 64px rgba(178,248,40,0.28), inset 0 1px 0 rgba(255,255,255,0.6)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      Enviar mensagem
      <FiArrowUpRight
        aria-hidden="true"
        className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.button>
  )
}
