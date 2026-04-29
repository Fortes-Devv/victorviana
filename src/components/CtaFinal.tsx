export default function CtaFinal() {
  return (
    <div style={{
      background: 'linear-gradient(135deg,var(--red-dark) 0%,var(--black) 60%)',
      padding: '100px 40px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Diagonal pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,0.01) 30px,rgba(255,255,255,0.01) 31px)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' }}>

        <div data-aos="fade-up">
          <div className="section-tag" style={{ justifyContent: 'center', marginBottom: 28 }}>Decisão</div>
          <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 48, lineHeight: 1.1 }}>
            A escolha<br />é <span style={{ color: 'var(--gold)' }}>simples.</span>
          </h2>
        </div>

        {/* Contrast grid */}
        <div
          data-aos="fade-up"
          data-aos-delay={100}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 24, alignItems: 'start', textAlign: 'left', marginBottom: 52,
          }}
        >
          {/* Bad side */}
          <div style={{
            padding: 24,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            <p style={{ fontFamily: 'Barlow Condensed', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
              Continuar igual
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>
              Estudar do mesmo jeito e continuar tendo os mesmos resultados. Mais tempo. Menos progresso.
            </p>
          </div>

          {/* VS divider - hidden on small screens via inline */}
          <div style={{ fontFamily: 'Oswald', fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,0.1)', alignSelf: 'center', textAlign: 'center' }}>
            VS
          </div>

          {/* Good side */}
          <div style={{
            padding: 24,
            background: 'rgba(200,25,26,0.1)',
            border: '1px solid rgba(200,25,26,0.3)',
          }}>
            <p style={{ fontFamily: 'Barlow Condensed', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--red-bright)', marginBottom: 12 }}>
              Evoluir agora
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--off-white)' }}>
              Ajustar sua estratégia agora e começar a evoluir de verdade. Com método, clareza e resultado.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay={200}>
          <a href="#" className="btn-gold">
            Quero aumentar meus acertos <span className="arrow">→</span>
          </a>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 14, letterSpacing: 1, textTransform: 'uppercase' }}>
            Quanto antes você começa, antes você evolui.
          </p>
        </div>

      </div>
    </div>
  )
}
