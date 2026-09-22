# Atualização visual da POC

## Escopo aplicado

1. Um único sistema de rede neural para todas as rotas.
2. Pontos distribuídos pelo viewport; as conexões surgem depois dos pontos.
3. O canvas do loading é reaproveitado como background da Home para evitar corte visual.
4. Loading sem nome, texto, percentual, barra de progresso, círculos ou ornamentos geométricos.
5. Transformação autoral de uma malha contínua em logo:
   - 3 segundos de transformação;
   - 2 segundos com a marca concluída;
   - liberação do conteúdo após 5 segundos;
   - fallback de segurança em 6,2 segundos.
6. Estado final construído com as cinco formas da marca oficial.
7. Iframe do CashFlow preservado com navegação do DataStudio.

## Arquivos alterados

- `src/layouts/BaseLayout.astro`: estrutura SVG do loading e fallback.
- `src/styles/global.css`: estados visuais, responsividade e background global.
- `public/scripts/site.js`: sequência de pontos, conexões, handoff e liberação da Home.
- `VALIDATION.md`: critérios manuais do loading e background.

## Critérios de regressão

- Nenhuma rota pode renderizar um background diferente da Home.
- O loading não pode permanecer sobre a página após o fallback.
- O canvas não pode criar overflow ou capturar cliques.
- A logo não pode ser simplificada ou substituída por interpretação aproximada.
- A animação deve respeitar desktop e mobile.
- Em mudanças futuras, registrar aqui uma nova seção datada antes de substituir o comportamento.

## Validação desta versão

- Inspeção estrutural do HTML local: sem overflow e sem recursos com falha.
- Inspeção visual: desktop 1440×900 e mobile 390×844.
- Build Astro local: pendente porque o ambiente de geração não teve acesso ao registro npm.
- Build oficial: executar pelo workflow `Deploy POC to GitHub Pages`.