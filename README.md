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

Hospedagem: HostGator, Plano M, cPanel. O site fica em public_html/sindico.
Regra fixa: nunca alterar os registros MX do domínio — eles controlam o e-mail da empresa.

Para atualizar o site no ar:
1. Se mudou css/estilo.css ou js/site.js, aumentar o "?v=" dos dois links no index.html.
2. Montar o pacote site-novo-publicar.zip só com os arquivos do site: index.html, .htaccess, css/, js/, img/
   (nunca .mentor/, .git/, README.md).
3. cPanel > Gerenciador de Arquivos > public_html/sindico > Carregar o zip > botão direito > Extrair.
4. Apagar o zip do servidor e testar numa aba anônima (computador e celular).

## Voltar atrás (plano de reversão)

| O que deu errado | O que fazer |
|---|---|
| Uma atualização quebrou o site | Pegar a versão anterior no Git (pedir ajuda antes de rodar comando de reversão), montar o zip e extrair por cima |
| Um arquivo foi apagado por engano no servidor | cPanel > Gerenciador de Arquivos > Exibir Lixeira > Restaurar |
| Precisa do site antigo inteiro | Backup site-antigo-2026-10-20.zip (guardado pelo Vitor): subir em public_html/sindico e extrair |
| E-mail parou | Não é o site: conferir no cPanel > Zone Editor se os registros MX continuam apontando para mail.guedesdeazevedo.com.br |

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
