import LogoLoop, { type LogoItem } from '../shared/LogoLoop'
import { Navbar } from '../shared/Navbar'
import logoRmWhite from '../../assets/Logo RM - branco.svg'
import scrollIndicator from '../../assets/SVG.svg'
import heroVideo from '../../assets/202606290855.mp4'

const partnerLogos: LogoItem[] = [
  { src: logoRmWhite, alt: 'RM Agency', title: 'RM Agency', width: 27, height: 28 },
  { src: logoRmWhite, alt: 'RM Agency', title: 'RM Agency', width: 27, height: 28 },
  { src: logoRmWhite, alt: 'RM Agency', title: 'RM Agency', width: 27, height: 28 },
  { src: logoRmWhite, alt: 'RM Agency', title: 'RM Agency', width: 27, height: 28 },
  { src: logoRmWhite, alt: 'RM Agency', title: 'RM Agency', width: 27, height: 28 },
]

export function HeroSection() {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-video-layer" aria-hidden="true">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <Navbar />

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-pill">Construindo identidades unicas</span>
          <h1>Sua marca no digital,</h1>
          <h1> do jeito Certo.</h1>
          <p>
            Cada detalhe importa. Da identidade visual ao posicionamento digital,
            desenvolvemos solucoes que unem estetica, estrategia e performance.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#footer">
              Comece agora
            </a>
            <a className="button button-secondary" href="#projects">
              Ver Projetos
            </a>
          </div>

          <div className="hero-scroll">
            <span className="hero-scroll-text hero-scroll-text-left">
              Role para baixo
            </span>
            <div className="hero-scroll-line" aria-hidden="true">
              <img
                className="hero-scroll-indicator"
                src={scrollIndicator}
                alt=""
              />
            </div>
            <span className="hero-scroll-text hero-scroll-text-right">
              para ver mais
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-glow"></div>
        </div>
      </div>

      <div className="hero-logo-loop-wrap">
        <LogoLoop
          logos={partnerLogos}
          speed={28}
          direction="left"
          logoHeight={62}
          gap={120
          }
          hoverSpeed={14}
          fadeOut
          fadeOutColor="#030503"
          scaleOnHover
          ariaLabel="Marcas parceiras"
          className="hero-logo-loop"
        />
      </div>
    </section>
  )
}
