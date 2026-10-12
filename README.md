# Site Guedes de Azevedo

Site institucional da Guedes de Azevedo Síndico Profissional (sindico.guedesdeazevedo.com.br).
Explica o serviço, mostra exemplos de trabalho e recebe pedidos de orçamento pelo WhatsApp.

## O que ele faz

- Apresenta a empresa e o serviço de síndico profissional
- Mostra o conteúdo certo para construtoras e para condomínios existentes
- Exibe exemplos de trabalho
- Recebe pedidos de orçamento: o formulário abre o WhatsApp com a mensagem pronta

## Tecnologias

HTML, CSS e JavaScript puros. Sem servidor, sem banco de dados, sem dependências para instalar.

## Rodar no computador

Abra o arquivo index.html no navegador (duplo clique, ou botão direito > Abrir com > Chrome).

## Testar

Abra no navegador, aperte F12 e clique no ícone de celular para ver a versão mobile.
Teste o formulário num celular de verdade antes de publicar.

## Publicar

A definir (ver .mentor/DECISIONS.md, ADR-003).
Regra fixa: nunca alterar os registros MX do domínio — eles controlam o e-mail da empresa.

## Estrutura de pastas

```
index.html        conteúdo
css/estilo.css    aparência
js/site.js        comportamento
img/              logo e fotos
.mentor/          documentação do projeto
```

## Backup

Todo o código fica no Git e no GitHub. Para voltar a uma versão anterior, peça ajuda antes de
rodar qualquer comando de reversão.

## Documentação do projeto

| Arquivo | O quê |
|---|---|
| .mentor/PROJECT_STATE.md | onde o projeto está agora |
| .mentor/ROADMAP.md | marcos e o que falta |
| .mentor/DECISIONS.md | por que as coisas são do jeito que são |
| .mentor/ARCHITECTURE.md | as peças e como conversam |
| .mentor/TASKS.md | tarefas |
