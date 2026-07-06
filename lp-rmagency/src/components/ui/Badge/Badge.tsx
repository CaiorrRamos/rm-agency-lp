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
        'relative inline-flex items-center overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/68 backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)] before:opacity-60',
        className,
      )}
    >
      {children}
    </span>
  )
}
