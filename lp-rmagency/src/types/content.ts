export type NavItem = {
  label: string
  href: string
}

export type HeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  trustItems: string[]
}

export type ShowcaseItem = {
  id: string
  title: string
  category: string
  status: 'live' | 'coming-soon'
  href: string
  image?: string
}

export type AboutStat = {
  label: string
  value: string
}

export type AboutFounder = {
  name: string
  role: string
  image: string
}

export type ProcessStep = {
  id: string
  step: string
  title: string
  description: string
}

export type Solution = {
  id: string
  title: string
  description: string
  tags: string[]
}

export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export type FAQItem = {
  id: string
  question: string
  answer: string
}

export type CTAContent = {
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
}
