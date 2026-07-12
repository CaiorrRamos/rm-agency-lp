import { motion } from 'framer-motion'
import { heroContent } from '../../content/site'
import { smoothTransition, staggerContainer } from '../../utils/animations'
import { ContactFooter } from './components/ContactFooter'
import { ContactForm } from './components/ContactForm'
import { ContactInfo } from './components/ContactInfo'

const pageVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: smoothTransition(0.85),
  },
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: smoothTransition(0.8, 0.08),
  },
}

export function ContactPage() {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-28 text-white sm:pt-32"
      initial="hidden"
      animate="show"
      variants={pageVariants}
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-65"
          src={heroContent.media}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(178,248,40,0.18),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.82))]" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-[1720px] items-center px-4 py-8 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="mx-auto grid w-full max-w-[1600px] gap-10 rounded-[36px] border border-white/[0.08] bg-[rgba(12,12,12,0.55)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[30px] sm:p-8 md:p-10 lg:grid-cols-[1.55fr_0.9fr] lg:items-center lg:gap-14 lg:p-16"
          variants={containerVariants}
        >
          <motion.div variants={staggerContainer(0.12, 0.08)} initial="hidden" animate="show">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl"
              variants={pageVariants}
            >
              <span className="h-2 w-2 rounded-full bg-[#B2F828] shadow-[0_0_18px_rgba(178,248,40,0.75)]" />
              Vamos conversar
            </motion.div>

            <motion.h1
              className="mt-8 max-w-[11ch] font-['NeueMontreal'] text-[3.2rem] font-semibold leading-[0.92] text-white sm:text-[4.6rem] lg:text-[5.2rem]"
              variants={pageVariants}
            >
              Vamos criar algo{' '}
              <span className="text-[#B2F828]">incrível</span> juntos.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[600px] text-base leading-7 text-white/65 sm:text-lg"
              variants={pageVariants}
            >
              Conte onde sua marca está agora e para onde ela precisa ir. A RM
              Agency transforma direção criativa, interface e estratégia em uma
              presença digital clara, premium e pronta para converter.
            </motion.p>

            <ContactForm />
          </motion.div>

          <ContactInfo />
        </motion.div>
      </section>

      <div className="relative z-10">
        <ContactFooter />
      </div>
    </motion.main>
  )
}
