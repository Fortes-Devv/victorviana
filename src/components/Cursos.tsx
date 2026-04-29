const cursos = [
  {
    img: '/cursos/raciocinio-logico.jpg',
    badge: 'Mais vendido',
    badgeColor: 'var(--gold)',
    badgeTextColor: '#000',
    title: 'Raciocínio Lógico para Concursos',
    desc: 'Do zero ao avançado. Domine todos os padrões de questões cobrados pelas principais bancas do país.',
    nivel: 'Iniciante ao Avançado',
    aulas: '120 aulas',
    horas: '40h',
  },
  {
    img: '/cursos/matematica.jpg',
    badge: 'Novo',
    badgeColor: 'var(--red-bright)',
    badgeTextColor: '#fff',
    title: 'Matemática Direcionada para Prova',
    desc: 'Sem enrolação. Só o que cai na prova. Aprenda com questões reais e gabaritadas das últimas seleções.',
    nivel: 'Básico ao Intermediário',
    aulas: '90 aulas',
    horas: '30h',
  },
  {
    img: '/cursos/estrategia.jpg',
    badge: 'Exclusivo',
    badgeColor: 'var(--gray-light)',
    badgeTextColor: 'var(--off-white)',
    title: 'Estratégia de Estudos',
    desc: 'Monte seu cronograma, elimine o que não cai e concentre energia no que realmente importa para aprovação.',
    nivel: 'Todos os níveis',
    aulas: '45 aulas',
    horas: '15h',
  },
  {
    img: '/cursos/simulado.jpg',
    badge: 'Premium',
    badgeColor: 'var(--red-dark)',
    badgeTextColor: '#fff',
    title: 'Simulados Comentados',
    desc: 'Resolva provas anteriores com resolução comentada ao vivo. Treine como se estivesse na prova real.',
    nivel: 'Intermediário ao Avançado',
    aulas: '60 aulas',
    horas: '20h',
  },
]

export default function Cursos() {
  return (
    <div id="cursos" style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div data-aos="fade-up" style={{ marginBottom: 56 }}>
          <div className="section-tag">Cursos disponíveis</div>
          <h2
            style={{
              fontFamily: 'Oswald',
              fontSize: 'clamp(28px,4vw,52px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            Escolha seu <span style={{ color: 'var(--red-bright)' }}>curso</span>
            <br />e comece <span style={{ color: 'var(--gold)' }}>agora.</span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--muted)',
              maxWidth: 540,
              lineHeight: 1.7,
            }}
          >
            Conteúdo direto ao ponto, criado para quem quer resultado rápido e sem desperdício de tempo.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 24,
          }}
        >
          {cursos.map((c, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-6px)'
                el.style.borderColor = 'rgba(200,25,26,0.4)'
                el.style.boxShadow = '0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,25,26,0.15)'
                const bar = el.querySelector('.course-bar') as HTMLDivElement
                if (bar) bar.style.height = '100%'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.boxShadow = 'none'
                const bar = el.querySelector('.course-bar') as HTMLDivElement
                if (bar) bar.style.height = '0%'
              }}
            >
              {/* Left accent bar */}
              <div
                className="course-bar"
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: 3,
                  height: '0%',
                  background: 'linear-gradient(180deg, var(--red), var(--gold))',
                  transition: 'height 0.4s',
                  zIndex: 2,
                }}
              />

              {/* Image area */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                  onError={e => {
                    const img = e.currentTarget as HTMLImageElement
                    img.style.display = 'none'
                    const fallback = img.nextElementSibling as HTMLDivElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, var(--gray-mid) 0%, var(--gray-dark) 60%, #0f0000 100%)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 8,
                    position: 'absolute',
                    inset: 0,
                  }}
                >
                  <div style={{
                    width: 48, height: 48,
                    border: '2px solid rgba(200,25,26,0.4)',
                    borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: 'Oswald', fontSize: 22, color: 'var(--red-bright)' }}>▶</span>
                  </div>
                  <span style={{ fontFamily: 'Barlow Condensed', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)' }}>
                    Imagem do curso
                  </span>
                </div>

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)',
                }} />

                {/* Badge */}
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: c.badgeColor,
                  color: c.badgeTextColor,
                  fontFamily: 'Barlow Condensed',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                }}>
                  {c.badge}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '24px 24px 28px' }}>
                <h3
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                    lineHeight: 1.2,
                    marginBottom: 10,
                  }}
                >
                  {c.title}
                </h3>

                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20 }}>
                  {c.desc}
                </p>

                {/* Meta info */}
                <div style={{
                  display: 'flex',
                  gap: 16,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: 20,
                  flexWrap: 'wrap',
                }}>
                  {[
                    { icon: '◈', label: c.nivel },
                    { icon: '▸', label: c.aulas },
                    { icon: '◷', label: c.horas },
                  ].map((m, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ color: 'var(--red-bright)', fontSize: 10 }}>{m.icon}</span>
                      <span style={{
                        fontFamily: 'Barlow Condensed',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '14px 20px' }}
                >
                  Acessar curso <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div
          data-aos="fade-up"
          style={{
            marginTop: 56,
            padding: '32px 40px',
            background: 'rgba(200,25,26,0.06)',
            border: '1px solid rgba(200,25,26,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <p style={{ fontFamily: 'Oswald', fontSize: 22, fontWeight: 700, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 4 }}>
              Acesso completo a todos os cursos.
            </p>
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>
              Uma assinatura. Todo o conteúdo. Resultado comprovado.
            </p>
          </div>
          <a href="#" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
            Ver planos <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </div>
  )
}
