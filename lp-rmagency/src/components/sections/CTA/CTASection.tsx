import { motion } from 'framer-motion'
import { ctaContent } from '../../../content/site'
import { fadeUp, scaleIn, staggerContainer } from '../../../utils/animations'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'

export function CTASection() {
  return (
    <RevealSection id="cta" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(178,248,40,0.18),transparent_28%)]" />
      <Container>
        <motion.div
          className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-16 text-center shadow-[0_24px_100px_rgba(0,0,0,0.28)] md:px-12"
          variants={staggerContainer(0.1)}
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.18em] text-white/48">
            {ctaContent.eyebrow}
          </motion.p>
          <motion.h2
            variants={scaleIn}
            className="mx-auto mt-4 max-w-[12ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-6xl"
          >
            {ctaContent.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[56ch] text-sm leading-7 text-white/60 md:text-base">
            {ctaContent.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Button href={ctaContent.primaryCta.href}>{ctaContent.primaryCta.label}</Button>
          </motion.div>
        </motion.div>
      </Container>
    </RevealSection>
  )
}
