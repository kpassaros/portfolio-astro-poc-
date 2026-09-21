# Limitações conhecidas desta POC

1. O build local do Astro não foi executado porque a sessão não possui acesso ao registro npm e não havia cache do pacote.
2. O primeiro build deverá ser executado pelo GitHub Actions no repositório temporário.
3. As versões estão como `latest` apenas na POC. Após aprovação, o `package-lock.json` gerado deverá ser preservado e as versões deverão ser fixadas.
4. Sobre, Carreira, Competências e Contato são rotas de confirmação; a migração integral desses conteúdos ficou fora da POC.
5. A paridade PT/EN completa será validada em uma etapa posterior.
6. O iframe externo depende das permissões e disponibilidade do DataStudio.
