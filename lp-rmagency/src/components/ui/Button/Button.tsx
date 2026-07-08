import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { buttonHover, buttonTap, springTransition } from '../../../utils/animations'

const baseClassName =
  'relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border px-5 py-2.5 text-center text-sm font-medium tracking-[0.01em] text-white bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] backdrop-blur-xl transition-all duration-300 ease-out before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)] before:opacity-60 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/12 sm:px-6 sm:py-3'

const variantClassName = {
  primary:
    'border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.25)] hover:scale-[1.04] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]',
  secondary:
    'border-white/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_8px_24px_rgba(0,0,0,0.22)] hover:scale-[1.04] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))]',
  ghost:
    'border-transparent bg-transparent px-0 py-0 text-white/72 before:hidden after:hidden hover:bg-transparent hover:text-white hover:scale-100',
} as const

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: keyof typeof variantClassName
}

type LinkProps = CommonProps &
  Omit<HTMLMotionProps<'a'>, 'children' | 'className'> & {
    href: string
  }

type NativeButtonProps = CommonProps &
  Omit<HTMLMotionProps<'button'>, 'children' | 'className'> & {
    href?: undefined
  }

export function Button({
  children,
  className,
  variant = 'primary',
  href,
  ...props
}: LinkProps | NativeButtonProps) {
  const classes = cn(baseClassName, variantClassName[variant], className)

  if (href) {
    return (
      <motion.a
        className={classes}
        href={href}
        whileHover={buttonHover}
        whileTap={buttonTap}
        transition={springTransition}
        {...(props as Omit<HTMLMotionProps<'a'>, 'children' | 'className'>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={springTransition}
      {...(props as Omit<HTMLMotionProps<'button'>, 'children' | 'className'>)}
    >
      {children}
    </motion.button>
  )
}
