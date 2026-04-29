const items = [
  'Quer parar de errar questões "fáceis" e parar de se frustrar na revisão',
  'Sente que está estagnado nos estudos e não sabe o que fazer diferente',
  'Precisa melhorar em RLM e Matemática para aumentar sua nota total',
  'Quer um caminho claro até a aprovação sem desperdício de tempo',
  'Não quer perder mais tempo com tentativa e erro sem resultado',
  'Está se preparando para o CFO Bombeiros ou concurso de segurança pública',
]

export default function ParaQuem() {
  return (
    <div style={{ background: '#0d0000', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} data-aos="fade-up">

        <div className="section-tag">Para quem é</div>
        <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 48 }}>
          Esse método é para <span style={{ color: 'var(--red-bright)' }}>quem:</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {items.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: 20,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(200,25,26,0.3)'
                el.style.background = 'rgba(200,25,26,0.04)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(255,255,255,0.05)'
                el.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <div style={{
                width: 24, height: 24,
                background: 'rgba(200,25,26,0.15)',
                border: '1px solid rgba(200,25,26,0.4)',
                borderRadius: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: 'var(--red-bright)', fontSize: 12, fontWeight: 900, marginTop: 2,
              }}>
                ✓
              </div>
              <p style={{ fontSize: 14, color: 'var(--off-white)', lineHeight: 1.6 }}>{item}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
