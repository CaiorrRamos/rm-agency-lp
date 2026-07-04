import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { staggerContainer, viewportOnce } from '../../../utils/animations'

type RevealSectionProps = ComponentPropsWithoutRef<typeof motion.section> & {
  children: ReactNode
}

export function RevealSection({
  children,
  className,
  ...props
}: RevealSectionProps) {
  return (
    <motion.section
      className={cn('relative py-20 md:py-28 lg:py-32', className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.12, 0.04)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
