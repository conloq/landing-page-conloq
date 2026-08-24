---
plan name: MashLanding
plan description: Landing Mash confiável
plan status: done
---

## Idea
Atualizar a landing page estática do Mash sem adicionar dependências, preservando fontes, cores, logo, estrutura de publicação e o destino intencional do menu Mash. A implementação deve reorganizar a hierarquia e o texto aprovado, explicitar o problema do mash e do teste de iodo, documentar as funcionalidades confirmadas do sistema (CRUD de temperatura e iodo, login, CRUD de usuários e tratamento de fotos), apresentar as telas existentes como estado atual com legendas e separar claramente itens não confirmados como planejados/bloqueados. Também deve melhorar semântica, alt text, foco, operação por teclado, comportamento em mobile, ausência de links fictícios e robustez do JavaScript. A validação será feita pelo servidor HTTP documentado, inspeção estática e, se o navegador automatizado continuar indisponível, a limitação será registrada sem declarar validação visual concluída.

## Implementation
- Revisar o plano e confirmar que os arquivos limitados à alteração são index.html, assets/css/style.css e assets/script/main.js, sem mudar fontes, cores, dependências ou URLs inexistentes.
- Atualizar index.html com hierarquia semântica, copy aprovado, funcionalidades atuais, estado atual versus planejado/bloqueado, legendas das telas, alt text útil e controles sem destinos fictícios.
- Ajustar assets/css/style.css usando a paleta existente, reduzir dependência de alturas fixas no conteúdo alterado, garantir legibilidade, foco visível, layout sem sobreposição e adaptação nos breakpoints já documentados.
- Fortalecer assets/script/main.js com inicialização defensiva, estados acessíveis para o alternador de telas, suporte de teclado e pausa/controle mínimo para o carrossel sem quebrar a interação existente.
- Executar verificações estáticas de IDs, referências de assets, links, atributos alt, controles e sintaxe; iniciar `python -m http.server 8000` conforme README e tentar a validação no navegador disponível.
- Inspecionar o diff final, registrar evidências e limitações de validação em docs/codebase quando necessário, confirmar que não houve URLs inventadas nem alegações de funcionalidades não confirmadas, e marcar o plano concluído somente após a verificação.

## Required Specs
<!-- SPECS_START -->
- MashVisual
<!-- SPECS_END -->