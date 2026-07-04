import type { ReactNode } from 'react'
import { cn } from '../../../lib/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/68',
        className,
      )}
    >
      {children}
    </span>
  )
}
