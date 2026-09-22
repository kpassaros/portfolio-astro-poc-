# Validação da POC Astro

## Gate 1 — GitHub Actions

- [ ] `npm install` concluído.
- [ ] `npm run audit` aprovado.
- [ ] `astro check` aprovado.
- [ ] `astro build` aprovado.
- [ ] Artifact de Pages gerado.
- [ ] Deployment concluído.

## Gate 2 — Rotas

- [ ] `/`
- [ ] `/projects/`
- [ ] `/projects/cashflow-intelligence/`
- [ ] `/projects/futureviz-components/`
- [ ] `/labs/`
- [ ] `/labs/futureviz-lab/`
- [ ] `/about/`, `/career/`, `/skills/`, `/contact/`

## Gate 3 — CashFlow

- [ ] Novo iframe `p_5n6cpchl7d`.
- [ ] Navegação do DataStudio visível.
- [ ] Filtros funcionam.
- [ ] Sandbox preservado.
- [ ] Abre em nova aba.

## Gate 4 — Visual

- [ ] Navbar e background preservados.
- [ ] A mesma rede neural aparece em todas as rotas, sem reiniciar como outro visual.
- [ ] Loading exibe somente papel/logo e rede neural, sem textos, círculos ou barra de progresso.
- [ ] A transformação dura cerca de 3 s e mantém a logo final visível por cerca de 2 s.
- [ ] O último frame corresponde à logo oficial completa, inclusive bico, cabeça, corpo, asa, cauda e espaços negativos.
- [ ] A passagem para a Home é fluida e não deixa a tela travada.
- [ ] Home equivalente à identidade atual.
- [ ] Cards de Projects e Labs.
- [ ] Desktop 1366×768.
- [ ] Notebook 1024×768.
- [ ] Mobile 390×844.
- [ ] Tema claro e escuro.
- [ ] Sem overflow horizontal.

## Gate 5 — Arquitetura

- [ ] Adicionar projeto exige apenas conteúdo e assets.
- [ ] Projects não lista Labs.
- [ ] Labs não lista Projects.
- [ ] Slugs geram páginas estáticas.
- [ ] Conteúdo inválido interrompe o workflow.
- [ ] `dist/` funciona sem servidor Astro.

## Resultado

Registrar na documentação do portfólio:

- URL da POC.
- Workflow executado.
- Erros encontrados.
- Diferenças visuais.
- Decisão: aprovar, corrigir ou rejeitar.
