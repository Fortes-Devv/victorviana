const cards = [
  {
    icon: '🎯',
    title: 'Raciocínio Lógico Aplicado',
    desc: 'Aprenda a interpretar e resolver qualquer padrão de questão. Foco total em como a banca cobra.',
  },
  {
    icon: '📐',
    title: 'Matemática Direcionada para Prova',
    desc: 'Sem excesso — só o que realmente cai. Direto ao que você precisa resolver na hora.',
  },
  {
    icon: '📋',
    title: 'Estratégia de Estudos',
    desc: 'Organização simples e eficiente. Saiba exatamente o que estudar e quando estudar.',
  },
  {
    icon: '⚡',
    title: 'Treino com Questões Reais',
    desc: 'Prática que gera evolução de verdade. Resolução comentada de provas anteriores.',
  },
]

export default function Conteudo() {
  return (
    <div id="conteudo" style={{ background: 'var(--gray-mid)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} data-aos="fade-up">

        <div className="section-tag">O que você vai acessar</div>
        <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 48 }}>
          Conteúdo <span style={{ color: 'var(--gold)' }}>direcionado.</span>
          <br />Resultado <span style={{ color: 'var(--red-bright)' }}>garantido.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{
                padding: '32px 28px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.transform = 'translateY(-4px)'
                const bar = el.querySelector('.card-bar') as HTMLDivElement
                if (bar) bar.style.height = '100%'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(255,255,255,0.02)'
                el.style.transform = 'translateY(0)'
                const bar = el.querySelector('.card-bar') as HTMLDivElement
                if (bar) bar.style.height = '0%'
              }}
            >
              {/* Left accent bar */}
              <div
                className="card-bar"
                style={{
                  position: 'absolute', top: 0, left: 0, width: 4, height: 0,
                  background: 'var(--red)', transition: 'height 0.4s',
                }}
              />

              <div style={{
                width: 48, height: 48,
                background: 'rgba(200,25,26,0.12)',
                border: '1px solid rgba(200,25,26,0.25)',
                borderRadius: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, fontSize: 20,
              }}>
                {c.icon}
              </div>
              <p style={{ fontFamily: 'Barlow Condensed', fontSize: 16, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 10 }}>
                {c.title}
              </p>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }} data-aos="fade-up">
          <a href="#" className="btn-primary" style={{ fontSize: 15, padding: '18px 48px' }}>
            Acessar os conteúdos <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </div>
  )
}
