import {
  type CSSProperties,
  type PointerEventHandler,
  type ReactNode,
  useEffect,
  useRef,
} from 'react'
import { gsap } from 'gsap'
import { cn } from '../../../lib/cn'

type SetterFn = (value: number | string) => void

type ShowcaseChromaGridProps = {
  children: ReactNode
  className?: string
  radius?: number
  damping?: number
  fadeOut?: number
  ease?: string
}

export function ShowcaseChromaGrid({
  children,
  className,
  radius = 320,
  damping = 0.42,
  fadeOut = 0.55,
  ease = 'power3.out',
}: ShowcaseChromaGridProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<HTMLDivElement>(null)
  const setX = useRef<SetterFn | null>(null)
  const setY = useRef<SetterFn | null>(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const element = rootRef.current
    if (!element) return

    setX.current = gsap.quickSetter(element, '--x', 'px') as SetterFn
    setY.current = gsap.quickSetter(element, '--y', 'px') as SetterFn

    const { width, height } = element.getBoundingClientRect()
    pos.current = { x: width / 2, y: height / 2 }
    setX.current(pos.current.x)
    setY.current(pos.current.y)
  }, [])

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      overwrite: true,
      onUpdate: () => {
        setX.current?.(pos.current.x)
        setY.current?.(pos.current.y)
      },
    })
  }

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = event => {
    const bounds = rootRef.current?.getBoundingClientRect()
    if (!bounds) return

    moveTo(event.clientX - bounds.left, event.clientY - bounds.top)
    gsap.to(fadeRef.current, {
      opacity: 0,
      duration: 0.22,
      overwrite: true,
    })
  }

  const handlePointerLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    })
  }

  return (
    <div
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn('relative', className)}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%',
        } as CSSProperties
      }
    >
      {children}
      <div
        ref={fadeRef}
        className="pointer-events-none absolute inset-0 z-30 opacity-100"
        style={{
          backdropFilter: 'brightness(0.68) saturate(0.9)',
          WebkitBackdropFilter: 'brightness(0.68) saturate(0.9)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 22%, rgba(0,0,0,0.08) 38%, rgba(0,0,0,0.16) 56%, rgba(0,0,0,0.28) 72%, rgba(0,0,0,0.5) 88%, white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 22%, rgba(0,0,0,0.08) 38%, rgba(0,0,0,0.16) 56%, rgba(0,0,0,0.28) 72%, rgba(0,0,0,0.5) 88%, white 100%)',
        }}
      />
    </div>
  )
}
