import { motion } from 'framer-motion'
import { FiZap } from 'react-icons/fi'

export function AvailabilityCard() {
  return (
    <motion.div
      className="rounded-[28px] border border-[#B2F828]/26 bg-[linear-gradient(135deg,rgba(178,248,40,0.12),rgba(255,255,255,0.045))] p-6 shadow-[0_22px_70px_rgba(178,248,40,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl"
      whileHover={{ y: -4 }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B2F828] text-xl text-black shadow-[0_14px_42px_rgba(178,248,40,0.2)]">
        <FiZap aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-['NeueMontreal'] text-2xl font-medium text-white">
        Fast response
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/58">
        Our team usually replies within 24 hours to start discussing your
        project.
      </p>
    </motion.div>
  )
}
