import type { TargetAndTransition, Transition, Variants } from 'framer-motion'

export const smoothEase = [0.25, 0.8, 0.25, 1] as const

export const smoothTransition = (
  duration = 0.55,
  delay = 0,
): Transition => ({
  duration,
  delay,
  ease: smoothEase,
})

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
  mass: 0.8,
}

export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: smoothTransition(0.6),
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: smoothTransition(0.45),
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition(0.55),
  },
}

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const cardHover: TargetAndTransition = {
  y: -4,
  scale: 1.04,
  boxShadow: '0 24px 70px rgba(0, 0, 0, 0.34), 0 0 0 1px rgba(178, 248, 40, 0.16)',
}

export const buttonHover: TargetAndTransition = {
  scale: 1.03,
  opacity: 0.96,
}

export const buttonTap: TargetAndTransition = {
  scale: 0.98,
}
