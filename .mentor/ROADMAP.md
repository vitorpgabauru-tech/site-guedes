# Roadmap — Site Guedes de Azevedo

> Marcos, não prazos. Cada marco termina em algo que abre no navegador e dá para mostrar.

Atualizado em: 2026-10-20

---

## O que o site tem (MVP, conforme ADR-004 e ADR-005)

| # | Parte | Status |
|---|---|---|
| 1 | Barra fixa com logo, modo escuro/claro, "Pedir orçamento" e abas em pílulas | concluído |
| 2 | Topo com chamada, prédios animados, curva vinho e faixa de valores | concluído (trocar imagens licenciadas) |
| 3 | Nossa gestão: cinco frentes em cartões que abrem | concluído |
| 4 | Vistoria interativa (prédio em corte com 6 pontos) | concluído |
| 5 | Diagnóstico rápido com envio pelo WhatsApp | concluído |
| 6 | Orçamento em etapas com prévia e envio pelo WhatsApp | concluído |
| 7 | Equipe (fotos de Vitor e Silvia; iniciais para os demais) | concluído (faltam 3 fotos) |
| 8 | Construtoras (seção secundária) | concluído |
| 9 | Rodapé com contato e endereço | concluído |
| 10 | Exemplos do nosso trabalho | em espera (Vitor reunindo os casos) |

### Fora do MVP

| Funcionalidade | Quando | Por que não agora |
|---|---|---|
| Aviso por e-mail a cada pedido de orçamento | v2 | exige serviço externo ou servidor, e aviso de privacidade |
| Perguntas frequentes (FAQ) | v2 | o conteúdo existe no site antigo; entra depois de revisado |
| Blog / notícias | talvez | exige rotina de publicação |
| Área do cliente com login | não | outro tamanho de projeto (dados pessoais, segurança) |

---

## Marcos

### Marco 1 — Preparação (concluído em 2026-10-12)
### Marco 2 — Conteúdo e visual (concluído em 2026-10-20, exceto Exemplos)
### Marco 3 — Interatividade (concluído em 2026-10-20)

### Marco 4 — Revisão final (em andamento)
- [x] textos relidos e corrigidos
- [x] título, descrição, imagem de compartilhamento (Open Graph) e dados para o Google
- [x] ícone da aba e do celular
- [x] fontes no próprio site (sem Google Fonts)
- [ ] Vitor confirmar as afirmações do site (lista em TASKS.md)
- [ ] imagens de prédios licenciadas
- [ ] teste num celular de verdade (depois de publicado)

### Marco 5 — Publicação
Fecha quando: está no ar em sindico.guedesdeazevedo.com.br, com HTTPS, e o e-mail da empresa
continua funcionando.

- [x] hospedagem decidida (ADR-003): HostGator Plano M com cPanel, pasta public_html/sindico
- [x] backup do site antigo (site-antigo-2026-10-20.zip)
- [x] parte 1: site novo no ar (pacote site-novo-publicar.zip extraído em public_html/sindico, 2026-10-20)
- [ ] parte 2: apagar WordPress e arquivos do site antigo (manter .well-known)
- [ ] HTTPS ativo
- [ ] e-mail testado depois da publicação (enviar e receber)
- [ ] compartilhar o link no WhatsApp e conferir a prévia
- [ ] plano de reversão escrito

---

## Versões futuras

| Versão | Conteúdo | Condição para começar |
|---|---|---|
| v2 | aviso por e-mail dos pedidos, FAQ revisado, exemplos de trabalho | MVP no ar |
