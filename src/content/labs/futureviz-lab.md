---
kind: lab
title: FutureViz Lab — Component Builder
summary: Laboratório para testar componentes de BI e investigar um construtor visual capaz de exportar código para diferentes plataformas.
year: 2026
status: Em construção
featured: false
publish: true
cover: labs/futureviz-lab/cover.png
technologies: [HTML, CSS, JavaScript, JSON Schema, DAX, Handlebars]
maturity: Protótipo conceitual
hypothesis: Um schema canônico pode sincronizar canvas, propriedades, prévia e geradores de código sem duplicar o componente.
experiments:
  - KPIs, cards de categoria, rankings, tooltips e estados condicionais
  - Canvas em grade com bindings de métricas, dimensões e textos
  - Adaptadores para Power BI, DataStudio e WebDev
  - Preview Runtime com temas e estados de teste
evidence:
  - Protótipo visual aprovado
  - Arquitetura documentada no Notion
validatedCapabilities:
  - Configuração visual por propriedades
  - Bindings e regras condicionais
  - Exportação específica por plataforma como direção técnica
unsupportedCapabilities:
  - Edição bidirecional irrestrita de código no MVP
  - Publicação automática nas ferramentas no MVP
limitations:
  - Paridade completa entre plataformas não é garantida
  - DataStudio não executa JavaScript inline no Templr testado
  - Canvas totalmente livre prejudica responsividade e geração confiável
nextTests:
  - Schema JSON v0.1
  - Preview Runtime WebDev
  - Adaptador Power BI
  - Adaptador DataStudio
  - Comparação entre saídas
links:
  - label: Repositório FutureViz
    url: https://github.com/kpassaros/futureviz-bi-components
    primary: true
---

A POC valida o FutureViz Lab como coleção independente de Labs, sem duplicar páginas ou templates completos.
