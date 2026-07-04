import { motion } from 'framer-motion'
import { heroContent } from '../../../content/site'
import { fadeIn, fadeUp, scaleIn, smoothTransition, staggerContainer } from '../../../utils/animations'
import { Badge } from '../../ui/Badge/Badge'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'

export function HeroSection() {
  return (
    <Section id="hero" className="overflow-hidden pt-10 md:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(178,248,40,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.7))]" />

      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen">
        <video
          className="h-full w-full object-cover"
          src={heroContent.media}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center">
        <motion.div
          className="mx-auto flex max-w-[920px] flex-col items-center text-center"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.div variants={fadeIn}>
            <Badge className="mb-6 border-white/16 bg-black/30 text-white/82">
              {heroContent.eyebrow}
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={smoothTransition(0.75)}
            className="max-w-[11ch] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-7xl"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={smoothTransition(0.65, 0.05)}
            className="mt-6 max-w-[62ch] text-sm leading-7 text-white/68 md:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.1)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
          <motion.ul
            variants={staggerContainer(0.08)}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/42"
          >
            {heroContent.trustItems.map((item) => (
              <motion.li
                key={item}
                variants={scaleIn}
                className="rounded-full border border-white/8 px-3 py-1.5 will-change-transform"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </Section>
  )
}
