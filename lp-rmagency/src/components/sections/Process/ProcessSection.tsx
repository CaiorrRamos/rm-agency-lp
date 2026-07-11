import { motion } from 'framer-motion'
import { processContent } from '../../../content/site'
import { scaleIn } from '../../../utils/animations'
import { Card } from '../../ui/Card/Card'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'
import { ProcessCard } from './ProcessCard'

export function ProcessSection() {
  return (
    <RevealSection id="process">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={scaleIn}>
          <Card className="overflow-hidden p-0">
            <img
              src={processContent.image}
              alt="Processo de criação"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </Card>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow={processContent.eyebrow}
            title={processContent.title}
            description={processContent.description}
          />

          <div className="grid gap-4">
            {processContent.steps.map((step) => (
              <ProcessCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </Container>
    </RevealSection>
  )
}
