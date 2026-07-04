import { motion } from 'framer-motion'
import { fadeUp } from '../../../utils/animations'
import type { FAQItem as FAQItemType } from '../../../types/content'
import { Card } from '../../ui/Card/Card'

type FAQItemProps = {
  item: FAQItemType
}

export function FAQItem({ item }: FAQItemProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="rounded-[22px] p-5" interactive>
        <h3 className="text-base font-medium text-white">{item.question}</h3>
        <p className="mt-3 text-sm leading-7 text-white/56">{item.answer}</p>
      </Card>
    </motion.div>
  )
}
