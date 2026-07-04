import { motion } from 'framer-motion'
import { fadeUp } from '../../../utils/animations'
import type { ProcessStep } from '../../../types/content'
import { Card } from '../../ui/Card/Card'

type ProcessCardProps = {
  step: ProcessStep
}

export function ProcessCard({ step }: ProcessCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="rounded-[22px] p-5" interactive>
      <p className="text-xs uppercase tracking-[0.18em] text-[#B2F828]">{step.step}</p>
      <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white">{step.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/58">{step.description}</p>
      </Card>
    </motion.div>
  )
}
