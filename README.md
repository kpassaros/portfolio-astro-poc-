# Portfólio Dados & BI — Astro POC

Prova de conceito isolada da migração arquitetural. Não substitui o portfólio em produção.

## Objetivos

- Preservar a identidade visual existente.
- Separar `projects` e `labs` como Content Collections.
- Gerar páginas estáticas por slug.
- Validar CashFlow, FutureViz Components e FutureViz Lab.
- Publicar por GitHub Actions sem acesso direto ao GitHub do usuário.
- Manter conteúdo, assets, CSS e contratos independentes do Astro.

## Como validar no GitHub

1. Crie um repositório público temporário, por exemplo `portfolio-astro-poc`.
2. Envie todo o conteúdo deste pacote para a raiz.
3. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.
4. Abra **Actions** e acompanhe `Deploy POC to GitHub Pages`.
5. Se o workflow concluir, abra a URL exibida no deployment.
6. Use `VALIDATION.md` para a revisão.

## Desenvolvimento local

```bash
npm install
npm run audit
npm run check
npm run build
npm run dev
```

> Este pacote usa versões `latest` somente porque a sessão de geração não tinha acesso ao registro npm para criar o lockfile. Depois do primeiro build aprovado, fixe as versões e faça commit do `package-lock.json`.

## Estado

- Estrutura: preparada.
- Auditoria offline de conteúdo: executada.
- Background neural: unificado entre Home, páginas institucionais, Projects, Labs e cases.
- Loading: substituído por transformação autoral de malha/origami, sem texto, círculos ou progresso.
- Logo final: reconstruída com as cinco formas, proporções, cores e espaços negativos da marca.
- Tempo do loading: 3 s de transformação + 2 s de leitura da marca concluída.
- CashFlow: iframe navegável atualizado para `p_5n6cpchl7d`.
- QA visual local: aprovado em desktop 1440×900 e mobile 390×844.
- Build Astro local: pendente por indisponibilidade de rede na sessão de geração.
- Build remoto: configurado no GitHub Actions.
