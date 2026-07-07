import type { MouseEventHandler } from 'react'

export const handleChromaCardMove: MouseEventHandler<HTMLElement> = event => {
  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  card.style.setProperty('--mouse-x', `${event.clientX - bounds.left}px`)
  card.style.setProperty('--mouse-y', `${event.clientY - bounds.top}px`)
}
