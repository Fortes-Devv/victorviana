import { useEffect, useRef } from 'react'
import anime from 'animejs'

interface CounterRef {
  el: HTMLSpanElement | null
  target: number
  suffix: string
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const c1 = useRef<HTMLSpanElement>(null)
  const c2 = useRef<HTMLSpanElement>(null)
  const c3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Entrance animations
    anime({ targets: '.hero-accent-line', scaleY: [0, 1], duration: 1200, easing: 'easeOutExpo', delay: 300 })
    anime({ targets: '.hero-badge',       opacity: [0, 1], translateY: [-20, 0], duration: 800,  easing: 'easeOutExpo', delay: 400 })
    anime({
      targets: '.hero-h1, .hero-h2, .hero-h3',
      opacity: [0, 1], translateY: [30, 0],
      duration: 900, easing: 'easeOutExpo',
      delay: anime.stagger(120, { start: 500 }),
    })
    anime({ targets: '.hero-sub',     opacity: [0, 1], translateY: [20, 0], duration: 800, easing: 'easeOutExpo', delay: 900 })
    anime({ targets: '.hero-callout', opacity: [0, 1], translateX: [-20, 0], duration: 700, easing: 'easeOutExpo', delay: 1100 })
    anime({ targets: '.hero-cta',     opacity: [0, 1], scale: [0.9, 1], duration: 600, easing: 'easeOutBack',  delay: 1300 })

    // Counter animation on intersection
    const counters: CounterRef[] = [
      { el: c1.current, target: 1200, suffix: '' },
      { el: c2.current, target: 87,   suffix: '%' },
      { el: c3.current, target: 200,  suffix: '+' },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach(({ el, target, suffix }) => {
              if (!el) return
              let current = 0
              const step = target / 60
              const interval = setInterval(() => {
                current += step
                if (current >= target) {
                  current = target
                  clearInterval(interval)
                }
                el.textContent = Math.round(current) + suffix
              }, 1000 / 60)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#000 0%,#0f0000 40%,#1a0000 70%,#0a0a0a 100%)',
      }}
    >
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(200,25,26,0.04) 40px,rgba(200,25,26,0.04) 41px),' +
          'repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(200,25,26,0.04) 40px,rgba(200,25,26,0.04) 41px)',
      }} />

      {/* Left accent line */}
      <div
        className="hero-accent-line"
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
          background: 'linear-gradient(180deg,transparent,var(--red),var(--gold),var(--red),transparent)',
          transformOrigin: 'top',
        }}
      />

      {/* Decorative circle */}
      <div
        className="hero-circle-rotate"
        style={{
          position: 'absolute', right: -200, top: '50%',
          width: 700, height: 700, borderRadius: '50%',
          border: '1px solid rgba(200,25,26,0.15)',
          boxShadow: 'inset 0 0 120px rgba(200,25,26,0.08)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 40px', width: '100%' }}>

        {/* Badge */}
        <div
          className="hero-badge"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(200,25,26,0.15)',
            border: '1px solid rgba(200,25,26,0.4)',
            borderRadius: 2, padding: '6px 14px',
            fontFamily: 'Barlow Condensed', fontSize: 11, fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase', color: 'var(--red-bright)',
            marginBottom: 28, opacity: 0,
          }}
        >
          <span className="pulse-dot" style={{ width: 6, height: 6, background: 'var(--red-bright)', borderRadius: '50%' }} />
          RLM & MATEMÁTICA PARA CONCURSOS
        </div>

        {/* Headings */}
        <div>
          <p className="hero-h1" style={{ fontFamily: 'Oswald', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: 1, color: 'var(--off-white)', textTransform: 'uppercase', opacity: 0 }}>
            Você não reprova
          </p>
          <p className="hero-h1" style={{ fontFamily: 'Oswald', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: 1, color: 'var(--off-white)', textTransform: 'uppercase', opacity: 0 }}>
            por falta de esforço.
          </p>
          <p className="hero-h2" style={{ fontFamily: 'Oswald', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: 1, color: 'var(--red-bright)', textTransform: 'uppercase', opacity: 0 }}>
            Reprova por falta
          </p>
          <p className="hero-h3" style={{ fontFamily: 'Oswald', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: 1, color: 'var(--gold)', textTransform: 'uppercase', opacity: 0 }}>
            de estratégia.
          </p>
        </div>

        {/* Sub */}
        <p className="hero-sub" style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, marginTop: 20, fontWeight: 300, opacity: 0 }}>
          Domine Raciocínio Lógico e Matemática, disciplinas que mais definem sua nota — e comece a estudar com método, clareza e direção.
        </p>

        {/* Callout */}
        <div className="hero-callout" style={{ marginTop: 28, padding: '16px 24px', background: 'rgba(255,184,0,0.07)', borderLeft: '3px solid var(--gold)', display: 'inline-block', opacity: 0 }}>
          <p style={{ fontFamily: 'Barlow Condensed', fontSize: 15, color: 'var(--off-white)', fontWeight: 400 }}>
            Não é sobre estudar mais.
          </p>
          <p style={{ fontFamily: 'Barlow Condensed', fontSize: 17, color: 'var(--gold)', fontWeight: 700 }}>
            É sobre acertar mais.
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32 }}>
          <a href="#conteudo" className="btn-primary hero-cta" style={{ opacity: 0 }}>
            Quero estudar com estratégia <span className="arrow">→</span>
          </a>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10, letterSpacing: 1, textTransform: 'uppercase' }}>
            Comece agora. Sem enrolação.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display: 'flex', gap: 40, marginTop: 52, paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap',
          }}
        >
          {[
            { ref: c1, label: 'Aprovados CFO Bombeiros' },
            { ref: c2, label: 'Taxa de acerto no método' },
            { ref: c3, label: 'Horas de conteúdo' },
          ].map(({ ref, label }, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span
                ref={ref}
                style={{ fontFamily: 'Oswald', fontSize: 28, fontWeight: 700, color: 'var(--red-bright)' }}
              >
                0
              </span>
              <span style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
