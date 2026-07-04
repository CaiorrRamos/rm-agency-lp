import { motion } from 'framer-motion'
import { fadeUp } from '../../../utils/animations'
import type { ShowcaseItem } from '../../../types/content'
import { Badge } from '../../ui/Badge/Badge'
import { Card } from '../../ui/Card/Card'

type ShowcaseCardProps = {
  item: ShowcaseItem
  featured?: boolean
}

export function ShowcaseCard({ item, featured = false }: ShowcaseCardProps) {
  return (
    <motion.a href={item.href} className="group block h-full" variants={fadeUp}>
      <Card
        interactive
        className={`flex h-full flex-col overflow-hidden p-0 ${
          featured ? 'min-h-[320px]' : 'min-h-[220px]'
        }`}
      >
        {item.image ? (
          <div className={`${featured ? 'h-[220px]' : 'h-[150px]'} overflow-hidden bg-white/4`}>
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="flex h-full min-h-[150px] items-center justify-center bg-white/[0.02]">
            <span className="text-2xl font-semibold tracking-[-0.04em] text-white/76">
              {item.title}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/42">
              {item.category}
            </p>
          </div>
          <Badge className={item.status === 'live' ? 'text-[#D8FFA4]' : ''}>
            {item.status === 'live' ? 'Live' : 'Em breve'}
          </Badge>
        </div>
      </Card>
    </motion.a>
  )
}
