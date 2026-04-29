const cards = [
  { num: '01', title: 'Identifica o tipo de questão', desc: 'Rapidamente reconhece o padrão e já sabe qual caminho percorrer' },
  { num: '02', title: 'Sabe como resolver', desc: 'Não chuta. Aplica o método certo e chega na resposta com segurança' },
  { num: '03', title: 'Reduz erros', desc: 'Para de perder ponto por falta de interpretação ou atenção' },
  { num: '04', title: 'Ganha velocidade', desc: 'Resolve mais rápido sem sacrificar a precisão nas respostas' },
  { num: '05', title: 'Estuda com foco', desc: 'Concentra energia no que realmente importa e cai na prova' },
]

export default function Solucao() {
  return (
    <div style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} data-aos="fade-up">

        <div className="section-tag">Solução</div>
        <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 8 }}>
          Aqui você aprende a<br />estudar com <span style={{ color: 'var(--red-bright)' }}>inteligência.</span>
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 0 }}>Com o método, você:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20, marginTop: 32 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{
                padding: '28px 24px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '2px solid var(--red)',
                transition: 'all 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(200,25,26,0.06)'
                el.style.borderColor = 'rgba(200,25,26,0.3)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(255,255,255,0.02)'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontFamily: 'Oswald', fontSize: 42, fontWeight: 700, color: 'rgba(200,25,26,0.2)', lineHeight: 1, marginBottom: 12 }}>
                {c.num}
              </div>
              <p style={{ fontFamily: 'Barlow Condensed', fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 8 }}>
                {c.title}
              </p>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Result bar */}
        <div
          data-aos="fade-up"
          style={{
            marginTop: 48, padding: 32,
            background: 'rgba(255,184,0,0.05)',
            border: '1px solid rgba(255,184,0,0.2)',
            display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap',
          }}
        >
          <span style={{ fontFamily: 'Barlow Condensed', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)' }}>
            Resultado?
          </span>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {['Mais acertos', 'Mais confiança', 'Mais avanço'].map((r, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'Oswald', fontSize: 20, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase' }}>{r}</p>
                <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>
                  {['nas questões', 'na prova', 'na carreira'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
