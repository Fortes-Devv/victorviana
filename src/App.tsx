import { useEffect } from 'react'
import AOS from 'aos'

import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Problema from './components/Problema'
import Crenca from './components/Crenca'
import Solucao from './components/Solucao'
import ParaQuem from './components/ParaQuem'
import Conteudo from './components/Conteudo'
import Cursos from './components/Cursos'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  return (
    <main style={{ background: 'var(--black)', overflowX: 'hidden' }}>
      <Hero />
      <div className="section-divider" />
      <Sobre />
      <div className="section-divider" />
      <Problema />
      <div className="section-divider" />
      <Crenca />
      <div className="section-divider" />
      <Solucao />
      <div className="section-divider" />
      <ParaQuem />
      <div className="section-divider" />
      <Conteudo />
      <div className="section-divider" />
      <Cursos />
      <div className="section-divider" />
      <CtaFinal />
      <Footer />
    </main>
  )
}

export default App
