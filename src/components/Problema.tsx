const items = [
  'Estuda muito, mas sem prioridade',
  'Não entende por que erra',
  'Perde tempo com conteúdo irrelevante',
  'Não consegue manter constância',
]

export default function Problema() {
  return (
    <div style={{ background: '#0d0000', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} data-aos="fade-up">

        <div className="section-tag">Problema</div>
        <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 16 }}>
          <span style={{ color: 'var(--red-bright)' }}>Direto</span> ao ponto
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48, marginTop: 48, alignItems: 'start' }}>

          {/* List */}
          <div>
            <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.7 }}>
              A maioria dos candidatos trava nas mesmas coisas:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    width: 20, height: 20, background: 'rgba(200,25,26,0.2)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, color: 'var(--red-bright)',
                    fontSize: 11, fontWeight: 700, marginTop: 2,
                  }}>
                    ✕
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight box */}
          <div
            data-aos="zoom-in"
            style={{
              background: 'rgba(200,25,26,0.08)',
              border: '1px solid rgba(200,25,26,0.3)',
              padding: 32,
              clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)',
            }}
          >
            <p style={{ fontFamily: 'Barlow Condensed', fontSize: 11, letterSpacing: 2, color: 'var(--red-bright)', textTransform: 'uppercase', marginBottom: 12 }}>
              E principalmente:
            </p>
            <p style={{ fontFamily: 'Oswald', fontSize: 22, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: 'var(--white)' }}>
              Não consegue transformar{' '}
              <span style={{ color: 'var(--red-bright)' }}>estudo em resultado.</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
