import { solutionsContent } from '../../../content/site'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'
import { SolutionCard } from './SolutionCard'

export function SolutionsSection() {
  return (
    <RevealSection id="solutions">
      <Container>
        <SectionHeader
          eyebrow={solutionsContent.eyebrow}
          title={solutionsContent.title}
          description={solutionsContent.description}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {solutionsContent.items.map((item) => (
            <SolutionCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
