import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { cardHover, springTransition } from '../../../utils/animations'

type CardProps = Omit<HTMLMotionProps<'div'>, 'children' | 'className'> & {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({
  children,
  className,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm will-change-transform',
        className,
      )}
      whileHover={interactive ? cardHover : undefined}
      transition={interactive ? springTransition : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
