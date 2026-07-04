import { motion } from 'framer-motion'
import { fadeUp } from '../../../utils/animations'
import type { Solution } from '../../../types/content'
import { Badge } from '../../ui/Badge/Badge'
import { Card } from '../../ui/Card/Card'

type SolutionCardProps = {
  item: Solution
}

export function SolutionCard({ item }: SolutionCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="flex h-full flex-col rounded-[24px]" interactive>
        <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-white/56">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
