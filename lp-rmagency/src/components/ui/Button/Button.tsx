import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { buttonHover, buttonTap, springTransition } from '../../../utils/animations'

const baseClassName =
  'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B2F828]/50'

const variantClassName = {
  primary:
    'border-[#B2F828] bg-[#B2F828] text-black hover:translate-y-[-1px] hover:shadow-[0_0_30px_rgba(178,248,40,0.24)]',
  secondary:
    'border-white/12 bg-white/[0.04] text-white backdrop-blur-md hover:border-[#B2F828]/40 hover:text-[#D8FFA4]',
  ghost:
    'border-transparent bg-transparent px-0 py-0 text-white/72 hover:text-white',
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
