import { motion } from 'framer-motion'
import logo from '../../../assets/Logo.svg'
import { heroContent } from '../../../content/site'
import { fadeIn, fadeUp, smoothTransition, staggerContainer } from '../../../utils/animations'
import LogoLoop, { type LogoItem } from '../../shared/LogoLoop'
import { Badge } from '../../ui/Badge/Badge'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'

const logos: LogoItem[] = Array.from({ length: 8 }, (_, index) => ({
  src: logo,
  alt: `RM Agency ${index + 1}`,
  title: 'RM Agency',
  width: 124,
  height: 28,
}))

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(178,248,40,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.7))]" />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[96vh] bg-gradient-to-b from-transparent via-black/76 via-[48%] to-black blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[74vh] bg-gradient-to-b from-transparent via-black/90 via-[38%] to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[460px] bg-gradient-to-t from-black via-black/98 via-[70%] to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
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

      <Container className="relative z-10 flex min-h-[calc(100svh-5rem)] w-full max-w-5xl flex-col items-center justify-center px-0">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-[36%] rounded-full bg-white/[0.012] blur-[100px]" />
        <motion.div
          className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center md:gap-8"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.div variants={fadeIn}>
            <Badge className="rounded-full border border-white/11 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.022))] px-4 py-2 text-sm font-medium normal-case tracking-normal text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_14px_rgba(0,0,0,0.06)] [backdrop-filter:blur(14px)_saturate(155%)]">
              {heroContent.eyebrow}
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={smoothTransition(0.75)}
            className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.16)] md:text-6xl lg:text-7xl"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={smoothTransition(0.65, 0.05)}
            className="max-w-2xl text-base leading-relaxed text-white/62 [text-shadow:0_3px_14px_rgba(0,0,0,0.14)] md:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.1)}
            className="mt-4 flex flex-wrap items-center justify-center gap-3.5 md:mt-6"
          >
            <Button
              href={heroContent.primaryCta.href}
              className="border-white/20 text-sm text-white"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              className="text-sm text-white"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.15)}
            className="mt-8 flex flex-col items-center justify-center text-xs text-white/40 md:mt-10"
          >
            <div className="flex w-full max-w-[680px] items-center justify-center gap-4 md:gap-6">
              <span className="whitespace-nowrap">Role para baixo</span>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-white/66 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_16px_rgba(0,0,0,0.1)] backdrop-blur-lg">
                i
              </span>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
              <span className="whitespace-nowrap">para ver mais</span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.2)}
            className="relative mt-24 w-full max-w-6xl overflow-hidden px-8 py-4 opacity-70 md:mt-32 md:px-12"
          >
            <LogoLoop
              logos={logos}
              speed={40}
              direction="left"
              logoHeight={38}
              gap={62}
              pauseOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Logos RM Agency"
              className="relative z-10 bg-transparent"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
