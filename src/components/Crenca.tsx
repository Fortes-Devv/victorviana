const checks = [
  { text: 'Existe um padrão.', gold: false },
  { text: 'Existe uma lógica.', gold: false },
  { text: 'E ela pode ser treinada.', gold: true },
]

export default function Crenca() {
  return (
    <div style={{ background: 'var(--gray-mid)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} data-aos="fade-up">

        <div className="section-tag">Quebra de crença</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 60, marginTop: 32, alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ fontFamily: 'Oswald', fontSize: 80, fontWeight: 700, lineHeight: 1, color: 'rgba(200,25,26,0.2)', textTransform: 'uppercase', marginBottom: -20 }}>
              NÃO
            </div>
            <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20, lineHeight: 1.15 }}>
              Você não precisa ser<br />
              <span style={{ color: 'var(--red-bright)' }}>"bom em matemática".</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>
              Precisa aprender como a prova cobra matemática. Não é sobre talento — é sobre método.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {checks.map((c, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.02)',
                    borderLeft: '2px solid var(--red)',
                  }}
                >
                  <div style={{
                    width: 18, height: 18, background: 'rgba(200,25,26,0.2)',
                    borderRadius: 2, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                    color: 'var(--red-bright)', fontSize: 10, fontWeight: 700,
                  }}>
                    ✓
                  </div>
                  <p style={{ fontSize: 14, color: c.gold ? 'var(--gold)' : 'var(--off-white)', fontWeight: c.gold ? 700 : 400 }}>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right box */}
          <div
            data-aos="fade-left"
            style={{
              background: 'rgba(200,25,26,0.06)',
              border: '1px solid rgba(200,25,26,0.25)',
              padding: 36,
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute', top: -14, left: 24,
              background: 'var(--gray-mid)', padding: '0 12px',
              fontFamily: 'Barlow Condensed', fontSize: 10, letterSpacing: 2,
              color: 'var(--red-bright)', fontWeight: 600, textTransform: 'uppercase',
            }}>
              LÓGICA
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--off-white)', fontWeight: 300 }}>
              Quando você <strong style={{ color: 'var(--gold)' }}>entende isso</strong>, tudo muda.
              Para de tentar ser inteligente — e começa a ser{' '}
              <strong style={{ color: 'var(--gold)' }}>estratégico</strong>.
              <br /><br />
              O candidato aprovado não sabe mais que você. Ele sabe{' '}
              <strong style={{ color: 'var(--gold)' }}>o que estudar</strong> e{' '}
              <strong style={{ color: 'var(--gold)' }}>como aplicar</strong>.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
