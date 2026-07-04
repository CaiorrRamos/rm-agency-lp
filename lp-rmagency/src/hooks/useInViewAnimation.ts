import { useEffect, useRef } from 'react'
import { useAnimationControls, useInView } from 'framer-motion'

interface UseInViewAnimationOptions {
  amount?: number | 'some' | 'all'
  margin?: string
  once?: boolean
}

interface UseInViewAnimationResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>
  controls: ReturnType<typeof useAnimationControls>
  isInView: boolean
}

export const useInViewAnimation = <T extends HTMLElement>(
  options: UseInViewAnimationOptions = {},
): UseInViewAnimationResult<T> => {
  const { amount = 0.2, margin = '-100px 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const controls = useAnimationControls()
  const isInView = useInView(ref, { amount, margin: margin as `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`, once })

  useEffect(() => {
    if (isInView) {
      void controls.start('animate')
    }
  }, [controls, isInView])

  return { ref, controls, isInView }
}
