import { motion } from 'framer-motion'
import { fadeUp } from '../../../utils/animations'
import type { Testimonial } from '../../../types/content'
import { Card } from '../../ui/Card/Card'

type TestimonialCardProps = {
  item: Testimonial
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="flex h-full flex-col rounded-[24px]" interactive>
        <div className="flex items-center gap-3">
          <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-medium text-white">{item.name}</p>
            <p className="text-sm text-white/46">{item.role}</p>
          </div>
        </div>

        <p className="mt-5 flex-1 text-sm leading-7 text-white/60">{item.quote}</p>
        <p className="mt-6 text-sm tracking-[0.22em] text-[#B2F828]">
          {'★'.repeat(item.rating)}
        </p>
      </Card>
    </motion.div>
  )
}
