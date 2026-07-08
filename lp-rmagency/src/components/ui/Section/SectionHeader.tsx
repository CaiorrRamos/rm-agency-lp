import { motion } from 'framer-motion'
import { fadeIn, fadeUp } from '../../../utils/animations'
import { Badge } from '../Badge/Badge'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'

  return (
    <div className={`mb-8 flex max-w-[720px] flex-col gap-4 sm:mb-10 ${alignment}`}>
      {eyebrow ? (
        <motion.div variants={fadeIn}>
          <Badge className="text-white/76">{eyebrow}</Badge>
        </motion.div>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className="max-w-[14ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="max-w-[62ch] text-sm leading-6 text-white/62 sm:leading-7 md:text-base"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
