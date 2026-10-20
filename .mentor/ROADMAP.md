# Roadmap — Site Guedes de Azevedo

> Marcos, não prazos. Cada marco termina em algo que abre no navegador e dá para mostrar.

Atualizado em: 2026-10-12

---

## MVP

| # | Funcionalidade | Status |
|---|---|---|
| 1 | Topo com frase principal e botão de WhatsApp | concluído |
| 2 | Serviços com seleção interativa: "sou construtora" / "sou de um condomínio existente" | em andamento (conteúdo pronto) |
| 3 | Exemplos de trabalho em cartões, sem nomes de condomínio | pendente |
| 4 | Quem somos: engenharia civil, CREA, FGV, equipe | pendente |
| 5 | Formulário de interesse em orçamento que abre o WhatsApp com a mensagem pronta | pendente |

### Fora do MVP

| Funcionalidade | Quando | Por que não agora |
|---|---|---|
| Aviso por e-mail a cada pedido de orçamento | v2 | exige serviço externo ou servidor, e aviso de privacidade |
| Perguntas frequentes (FAQ) | v2 | o conteúdo existe no site atual; entra depois de revisado |
| Blog / notícias | talvez | exige rotina de publicação |
| Área do cliente com login | não | outro tamanho de projeto (dados pessoais, segurança) |

---

## Marcos

### Marco 1 — Preparação (concluído em 2026-10-12)
Fecha quando: index.html abre no navegador e o primeiro commit está feito.

- [x] Git configurado (nome e e-mail)
- [x] pasta criada, git init rodado
- [x] index.html com a estrutura das 5 seções
- [x] primeiro commit
- [x] repositório no GitHub criado e push feito

### Marco 2 — Conteúdo e visual
Fecha quando: as 5 seções têm texto final, o visual está pronto e funciona no celular.

- [ ] textos revisados (sem erros de português)
- [x] CSS base com cores e fontes da marca
- [ ] layout responsivo testado no modo celular
- [ ] logo e imagens otimizadas, com texto alternativo (alt)

### Marco 3 — Interatividade
Fecha quando: a seleção de público e o formulário funcionam de ponta a ponta.

- [ ] seleção "construtora / condomínio existente" troca o conteúdo
- [ ] formulário valida os campos obrigatórios
- [ ] botão abre o WhatsApp com a mensagem certa, testado num celular real
- [ ] botão flutuante de WhatsApp

### Marco 4 — Qualidade
Fecha quando: o checklist abaixo está limpo.

- [ ] título e descrição para o Google, H1 único
- [ ] todos os links testados
- [ ] uma pessoa de fora usou no celular sem ajuda

### Marco 5 — Publicação
Fecha quando: está no ar em sindico.guedesdeazevedo.com.br, com HTTPS, e o e-mail da empresa
continua funcionando.

- [ ] hospedagem decidida (ADR-003)
- [ ] backup do site antigo
- [ ] publicação
- [ ] HTTPS ativo
- [ ] e-mail testado depois da publicação (enviar e receber)
- [ ] plano de reversão escrito

---

## Versões futuras

| Versão | Conteúdo | Condição para começar |
|---|---|---|
| v2 | aviso por e-mail dos pedidos de orçamento, FAQ revisado | MVP no ar |
