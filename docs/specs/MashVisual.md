# Spec: MashVisual

Scope: feature

# Mash Visual Redesign

## Objetivo
Reorganizar a landing page para que visitantes compreendam rapidamente o problema da mosturação, a proposta do Mash e os benefícios, mantendo a identidade visual existente.

## Direção visual
- Preservar a paleta azul-marinho, verde-petróleo e amarelo, além dos assets locais existentes.
- Aplicar Poppins de forma consistente em títulos, textos, botões e controles.
- Corrigir hierarquia, espaçamento, alinhamento, contraste e responsividade sem introduzir dependências.

## Conteúdo confirmado
A seção de propósitos deve apresentar exatamente:
1. Aprimorar processos de interação.
2. Oferecer ferramentas para facilitar decisões.
3. Automatizar processos na cervejaria artesanal.

Não inventar funcionalidades, URLs ou dados de produto. Diferenciar visualmente funcionalidades atuais, protótipos e planejamento futuro quando essa distinção aparecer no conteúdo.

## Equipe e redes sociais
- Exibir os assets locais de GitHub e LinkedIn em cada card de integrante.
- Exibir os mesmos ícones no rodapé.
- Os ícones devem ser visuais e não clicáveis, pois não há URLs aprovadas.
- Usar texto alternativo/labels acessíveis sem simular links.

## Estrutura
Manter e melhorar as seções existentes: hero, problema/objetivo, propósitos, produto/Mash, equipe, cerveja artesanal e encerramento/rodapé. Corrigir botões, cards, fontes e possíveis sobreposições.

## Validação
Verificar navegação por teclado e foco nos controles reais, ausência de overflow horizontal, legibilidade e ausência de sobreposição em 390px, 768px, 1024px e 1440px. Executar as verificações disponíveis para uma página estática: servidor HTTP, inspeção de console, `node --check` e `git diff --check`.