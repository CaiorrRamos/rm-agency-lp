import { motion } from 'framer-motion'
import { showcaseItems } from '../../../content/site'
import { Container } from '../../ui/Container/Container'
import { smoothTransition, staggerContainer } from '../../../utils/animations'
import { ShowcaseCard } from './ShowcaseCard'
import { ShowcaseChromaGrid } from './ShowcaseChromaGrid'

const columnVariants = staggerContainer(0.12, 0.18)

const cardDrop = {
  hidden: {
    opacity: 0,
    y: -72,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: smoothTransition(0.9),
  },
}

const featuredCardDrop = {
  hidden: {
    opacity: 0,
    y: -92,
    scale: 0.975,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: smoothTransition(1),
  },
}

export function ShowcaseSection() {
  const [leftTop, brandRm, rightTop, leftMid, featuredHat, rightMid, leftBottom, featuredDidi, rightBottom] =
    showcaseItems

  return (
    <motion.section
      id="showcase"
      className="relative isolate overflow-hidden bg-black pt-[88px] pb-[88px] sm:pt-[96px] sm:pb-[96px] md:pt-[124px] md:pb-[140px]"
      initial="hidden"
      animate="show"
    >
      <Container className="relative z-10 mx-auto w-full max-w-[1580px] px-3 sm:px-5 lg:px-6 xl:px-8">
        <ShowcaseChromaGrid
          className="mx-auto w-full max-w-[1520px]"
          radius={360}
          damping={0.38}
          fadeOut={0.5}
        >
          <motion.div
            className="flex w-full flex-col gap-3 sm:gap-2 md:grid md:grid-cols-[0.94fr_1.14fr_0.94fr] md:items-start md:gap-2 lg:gap-2.5 xl:gap-3"
            variants={staggerContainer(0.08, 0.14)}
          >
            <motion.div
              className="flex flex-col gap-2 md:pt-[82px] lg:pt-[88px] xl:pt-[96px]"
              variants={columnVariants}
            >
              <ShowcaseCard
                item={leftTop}
                className="min-h-[240px] sm:min-h-[280px] md:min-h-[42svh] lg:min-h-[44svh] xl:min-h-[45svh]"
                variants={cardDrop}
              />
              <ShowcaseCard
                item={leftMid}
                className="min-h-[240px] sm:min-h-[280px] md:min-h-[42svh] lg:min-h-[44svh] xl:min-h-[45svh]"
                variants={cardDrop}
              />
              <ShowcaseCard
                item={leftBottom}
                className="min-h-[240px] sm:min-h-[280px] md:min-h-[42svh] lg:min-h-[44svh] xl:min-h-[45svh]"
                variants={cardDrop}
              />
            </motion.div>

            <motion.div className="flex flex-col gap-2" variants={columnVariants}>
              <ShowcaseCard
                item={brandRm}
                featured
                className="min-h-[280px] sm:min-h-[340px] md:min-h-[49svh] lg:min-h-[52svh] xl:min-h-[54svh]"
                variants={featuredCardDrop}
              />
              <ShowcaseCard
                item={featuredHat}
                featured
                className="min-h-[280px] sm:min-h-[340px] md:min-h-[49svh] lg:min-h-[52svh] xl:min-h-[54svh]"
                variants={featuredCardDrop}
              />
              <ShowcaseCard
                item={featuredDidi}
                featured
                className="min-h-[280px] sm:min-h-[340px] md:min-h-[49svh] lg:min-h-[52svh] xl:min-h-[54svh]"
                variants={featuredCardDrop}
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 md:pt-[82px] lg:pt-[88px] xl:pt-[96px]"
              variants={columnVariants}
            >
              <ShowcaseCard
                item={rightTop}
                className="min-h-[240px] sm:min-h-[280px] md:min-h-[42svh] lg:min-h-[44svh] xl:min-h-[45svh]"
                variants={cardDrop}
              />
              <ShowcaseCard
                item={rightMid}
                className="min-h-[240px] sm:min-h-[280px] md:min-h-[42svh] lg:min-h-[44svh] xl:min-h-[45svh]"
                variants={cardDrop}
              />
              <ShowcaseCard
                item={rightBottom}
                className="min-h-[240px] sm:min-h-[280px] md:min-h-[42svh] lg:min-h-[44svh] xl:min-h-[45svh]"
                variants={cardDrop}
              />
            </motion.div>
          </motion.div>
        </ShowcaseChromaGrid>
      </Container>
    </motion.section>
  )
}
