export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      padding: '24px 40px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <p style={{
        fontSize: 12, color: 'rgba(255,255,255,0.2)',
        letterSpacing: 1, fontFamily: 'Barlow Condensed', textTransform: 'uppercase',
      }}>
        RLM & MATEMÁTICA PARA CONCURSOS · CFO BOMBEIROS MILITAR
      </p>
    </footer>
  )
}
