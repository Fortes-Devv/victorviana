# Bombeiro LP — Landing Page CFO Bombeiros Militar

Landing page de alta conversão para curso de RLM & Matemática para concursos militares.

## Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **AOS** (Animate On Scroll)
- **Anime.js 3**
- **Fontes**: Oswald + Barlow Condensed + Barlow (Google Fonts)

## Componentes

| Arquivo | Seção |
|---------|-------|
| `Hero.tsx` | Hero com headline de impacto, contadores animados e CTA |
| `Sobre.tsx` | Credenciais do professor e 3 pilares metodológicos |
| `Problema.tsx` | Dores do candidato com destaque em vermelho |
| `Crenca.tsx` | Quebra de crença: "você não precisa ser bom em matemática" |
| `Solucao.tsx` | 5 benefícios do método + resultado |
| `ParaQuem.tsx` | 6 perfis de público-alvo |
| `Conteudo.tsx` | 4 módulos do curso + CTA |
| `CtaFinal.tsx` | Contraste "continuar igual vs evoluir" + botão dourado |
| `Footer.tsx` | Rodapé simples |

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Build para produção

```bash
npm run build
npm run preview
```

## Paleta de cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--red` | `#C8191A` | Cor principal |
| `--red-bright` | `#E8201F` | Destaques, CTAs |
| `--red-dark` | `#8B0000` | Fundos escuros |
| `--gold` | `#FFB800` | Acentos dourados |
| `--off-white` | `#F0EDE8` | Texto principal |
| `--muted` | `#9A9A9A` | Texto secundário |
