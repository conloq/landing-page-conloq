# Landing Page Mash

testando webhook

Landing page institucional do projeto **Mash**, desenvolvido pela equipe Conloq no Projeto Integrador.

A página apresenta a Conloq, a equipe responsável, o contexto da produção de cerveja artesanal e a proposta do Mash para apoiar o teste de iodo e o monitoramento da mosturação.

## Sobre o Mash

O Mash é uma proposta de sistema para auxiliar pequenos produtores de cerveja artesanal no acompanhamento da etapa de mosturação.

O projeto busca apoiar:

- A interpretação do teste de iodo.
- A identificação de amido residual por características de cor.
- O monitoramento da temperatura durante o processo.
- O registro e a rastreabilidade das análises.
- A redução de erros na interpretação manual.

> A landing page apresenta a proposta do projeto. As funcionalidades técnicas devem ser descritas de acordo com o que estiver implementado e validado no sistema principal.

## Conteúdo da página

A landing page possui as seguintes seções:

- **Hero:** apresentação inicial da Conloq e acesso ao projeto.
- **Sobre a Conloq:** descrição da proposta e dos propósitos da equipe.
- **Equipe:** integrantes e respectivas áreas de atuação.
- **Cerveja artesanal:** contexto da mosturação e importância do teste de iodo.
- **Mash:** apresentação visual do sistema e da proposta de visão computacional.
- **Contatos:** links de contato e redes sociais.

## Tecnologias utilizadas

- HTML5.
- CSS3.
- JavaScript.
- SVG para logos e ícones.
- Google Fonts — Poppins.

O projeto é uma página estática e não possui `package.json` ou etapa de build configurada no repositório atual.

## Estrutura do projeto

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── backgroundGirls.png
│   │   ├── carrossel/
│   │   ├── equipe/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── telas/
│   └── script/
│       └── main.js
├── LICENSE
└── README.md
```

## Como executar localmente

Como a aplicação é estática, não é necessário instalar dependências.

### Opção 1: abrir diretamente

Abra o arquivo `index.html` no navegador.

### Opção 2: usar um servidor local

Na raiz do projeto, execute um servidor HTTP simples. Com Python:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Também é possível utilizar a extensão Live Server do Visual Studio Code.

## Desenvolvimento

Antes de alterar a página:

1. Crie uma branch relacionada à tarefa ou issue.
2. Mantenha HTML, CSS e JavaScript separados conforme a estrutura existente.
3. Verifique os caminhos relativos dos assets.
4. Teste a navegação, o carrossel, os botões e a responsividade.
5. Revise a página em desktop e mobile antes de abrir um Pull Request.

## Convenção de branches

Use uma branch por issue, com o prefixo da área responsável:

```text
frontend/issue-22-landing-page
frontend/issue-23-icones-propositos
design/issue-22-landing-page
```

A branch `main` deve permanecer estável.

## Convenção de commits

Use o formato:

```text
<tipo>: descrição curta da alteração
```

Tipos utilizados:

- `feat`: nova funcionalidade.
- `fix`: correção de erro.
- `refactor`: reorganização do código sem alteração de comportamento.
- `test`: criação ou alteração de testes.
- `docs`: documentação.
- `style`: alteração visual ou de formatação.
- `chore`: configuração ou manutenção.

Exemplos:

```bash
git commit -m "feat: adicionar seção sobre o Mash"
git commit -m "fix: corrigir caminho das imagens da equipe"
git commit -m "style: ajustar responsividade da landing page"
git commit -m "docs: atualizar README da landing page"
```

Regras:

- Escreva mensagens curtas e objetivas.
- Não misture tarefas diferentes no mesmo commit.
- Relacione o commit à issue correspondente quando aplicável.
- Nunca inclua senhas, tokens ou chaves de API.
- Revise e teste as alterações antes do commit.

## Equipe Conloq

- **João Alexandre Pinto Camargo:** Backend.
- **Jocieli Pontes Domingues da Silva:** Artigo e documentação.
- **Kevin da Silva Oliveira:** Design.
- **Haimon Cugler Vieira:** Frontend.

## Licença

Este projeto é destinado a fins educacionais e acadêmicos. Consulte o arquivo [LICENSE](LICENSE) para os termos completos.
