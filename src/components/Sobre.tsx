const pillars = [
  { num: '01', title: 'Entender o padrão das bancas', desc: 'saber o que vai cair antes de estudar' },
  { num: '02', title: 'Resolver com lógica,', desc: 'não com decoreba — entender o processo' },
  { num: '03', title: 'Eliminar o que não cai na prova', desc: '— estudar menos o que importa mais' },
]

const creds = [
  { color: 'var(--red-bright)', text: 'Aprovado no CFO do Corpo de Bombeiros Militar' },
  { color: 'var(--gold)',       text: 'Professor de RLM e Matemática' },
  { color: 'var(--red-bright)', text: 'Formado em Engenharia Civil' },
]

export default function Sobre() {
  return (
    <div style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} data-aos="fade-up">

        <div className="section-tag">Sobre</div>
        <h2 style={{ fontFamily: 'Oswald', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 16 }}>
          Quem vai te guiar<br /><span style={{ color: 'var(--red-bright)' }}>nessa preparação?</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 60, marginTop: 48, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div style={{ borderLeft: '3px solid var(--red)', padding: '20px 24px', background: 'rgba(200,25,26,0.07)', marginBottom: 24 }}>
              <p style={{ fontSize: 15, color: 'var(--off-white)', lineHeight: 1.7, fontStyle: 'italic' }}>
                Ele não ensina teoria solta.<br />
                <strong style={{ color: 'var(--gold)', fontWeight: 700 }}>Ensina o que faz você pontuar.</strong>
              </p>
            </div>

            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>
              Aprovado no CFO do Corpo de Bombeiros Militar, professor de RLM e Matemática e formado em Engenharia Civil.
              A metodologia foi construída com base em três pilares:
            </p>

            {pillars.map((p, i) => (
              <div
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 100}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20 }}
              >
                <div style={{
                  width: 36, height: 36, background: 'rgba(200,25,26,0.15)',
                  border: '1px solid rgba(200,25,26,0.3)', borderRadius: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: 'var(--red-bright)', fontSize: 14, fontWeight: 700,
                  fontFamily: 'Oswald',
                }}>
                  {p.num}
                </div>
                <p style={{ fontSize: 14, color: 'var(--off-white)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--gold)' }}>{p.title}</strong> {p.desc}
                </p>
              </div>
            ))}

            <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20 }}>
              Aqui, cada aula tem um objetivo claro:{' '}
              <strong style={{ color: 'var(--gold)' }}>aumentar sua taxa de acerto.</strong>
            </p>
          </div>

          {/* Right */}
          <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              width: '100%', aspectRatio: '4/3',
              background: 'rgba(200,25,26,0.08)', border: '1px solid rgba(200,25,26,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ textAlign: 'center', padding: 40 }}>
                <div style={{ fontFamily: 'Oswald', fontSize: 72, fontWeight: 700, color: 'rgba(200,25,26,0.2)', lineHeight: 1 }}>CFO</div>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: 12, letterSpacing: 3, color: 'var(--muted)', textTransform: 'uppercase', marginTop: 8 }}>
                  Corpo de Bombeiros Militar
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,var(--red),var(--gold))' }} />
            </div>

            {creds.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 2,
              }}>
                <div style={{ width: 8, height: 8, background: c.color, borderRadius: '50%', flexShrink: 0 }} />
                <p style={{ fontSize: 13, color: 'var(--muted)' }}><strong style={{ color: 'var(--white)' }}>{c.text.split(' ')[0]}</strong> {c.text.slice(c.text.indexOf(' ') + 1)}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
