import { showcaseItems } from '../../../content/site'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'
import { ShowcaseCard } from './ShowcaseCard'

export function ShowcaseSection() {
  const [leftTop, centerTop, rightTop, leftMid, centerMid, rightMid, leftBottom, centerBottom, rightBottom] =
    showcaseItems

  return (
    <RevealSection id="showcase">
      <Container>
        <SectionHeader
          eyebrow="Portfolio / Showcase"
          title="Cases, conceitos e espacos pensados para prova visual."
          description="A vitrine principal deve mostrar contraste entre placeholders estrategicos e cases que ja conseguem vender repertorio."
          align="center"
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr_1fr]">
          <div className="grid gap-4">
            <ShowcaseCard item={leftTop} />
            <ShowcaseCard item={leftMid} />
            <ShowcaseCard item={leftBottom} />
          </div>

          <div className="grid gap-4">
            <ShowcaseCard item={centerTop} featured />
            <ShowcaseCard item={centerMid} featured />
            <ShowcaseCard item={centerBottom} featured />
          </div>

          <div className="grid gap-4">
            <ShowcaseCard item={rightTop} />
            <ShowcaseCard item={rightMid} />
            <ShowcaseCard item={rightBottom} />
          </div>
        </div>
      </Container>
    </RevealSection>
  )
}
