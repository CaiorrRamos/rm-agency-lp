import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../../lib/cn'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn('relative py-20 md:py-28 lg:py-32', className)} {...props}>
      {children}
    </section>
  )
}
