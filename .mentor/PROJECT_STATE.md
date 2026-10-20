# Estado do projeto — Site Guedes de Azevedo

> Memória do projeto entre sessões. Cole este arquivo no início de uma conversa nova para
> retomar de onde parou. Máximo uma página. Atualize ao fim de toda etapa concluída e testada.

Atualizado em: 2026-10-20 (Etapa 10)

---

## O que é

Novo site da Guedes de Azevedo Síndico Profissional (sindico.guedesdeazevedo.com.br), feito à mão,
para substituir o site atual do construtor de sites (largura fixa, não funciona no celular, sem
WhatsApp, sem diferencial técnico, com erros de português).

Objetivo: quem entra entende o serviço, vê exemplos do trabalho e pede orçamento.

Para quem: principalmente condomínios já entregues que precisam de melhorias e solução para a
gestão (síndicos, conselheiros, moradores) em Bauru e Marília. Construtoras aparecem numa seção
secundária (implantação), sem ser o foco.
Tamanho: M (site estático, sem login e sem banco de dados).

## Stack

| | |
|---|---|
| Código | HTML, CSS e JavaScript puros, sem framework |
| Backend | nenhum no MVP |
| Banco | nenhum |
| Hospedagem | a definir (ver ADR-003) |
| Repositório | https://github.com/vitorpgabauru-tech/site-guedes (privado, branch main) |

## Ambiente

| | |
|---|---|
| Sistema operacional | Windows |
| Editor | VS Code (já instalado) |
| Git | já instalado |
| Pasta do projeto | C:\Users\User\Documents\site-guedes\site-guedes-inicio |
| Como rodar local | abrir index.html no navegador |
| Como testar | navegador, inclusive no modo celular (F12 > ícone de celular) |

## Onde estamos

Marco atual: M2 — Conteúdo e visual
Última etapa concluída: Etapa 9, topo em duas colunas com os prédios animados
Em revisão: Etapa 10, barra de navegação fixa (logo, menu, botão de modo, "Pedir orçamento")
Próxima etapa: seção das cinco frentes da gestão (abas), no lugar dos 2 cartões de serviço
Observação: os links do menu apontam para as seções atuais e mudam conforme as seções do protótipo entram

## Já funciona

- cores do protótipo com modo escuro padrão e modo claro (botão sol/lua, escolha salva no localStorage)
- topo com texto do protótipo, prédios animados, botão de WhatsApp (14) 99894-0464, slogan, curva vinho e faixa de valores
- seção de serviços com 2 cartões (será trocada pelas cinco frentes do protótipo)
- demais seções só com título
- código no GitHub

## Ainda não funciona

- navegação, cinco frentes, diagnóstico, vistoria, equipe, construtoras, orçamento e rodapé do protótipo
- fotos individuais da equipe (serão tiradas)

## Decisões que não se reabrem

- Site estático em HTML/CSS/JS puro, uma página só (ADR-001)
- Formulário de orçamento abre o WhatsApp com a mensagem pronta (ADR-002)
- Bild e Vitta não aparecem no site: não têm relação com a empresa
- Exemplos de trabalho sem nome de condomínio
- Foco em condomínios já entregues; implantação para construtoras é seção secundária (ADR-004)
- Visual: continuidade com o folder, modo escuro padrão com opção clara (ADR-004)

## Problemas conhecidos

- nenhum

## Contexto que o mentor precisa saber

- Vitor é iniciante: já mexeu com HTML, mas pouco. Explicar conceitos novos com analogia.
- Fluxo de trabalho (desde 2026-10-20): o mentor aplica as mudanças direto nos arquivos da pasta (ligação
  com o computador) e testa antes; Vitor revisa no Source Control (Ctrl + Shift + G), testa no navegador e
  faz o commit. Se ele pedir para voltar ao modo manual: trocas como "Localizar" / "Substituir por" (Ctrl + H).
- Comandos do Git sempre num bloco só (add, commit, push); comandos destrutivos separados.
- WhatsApp oficial da empresa: (14) 99894-0464 (wa.me/5514998940464).
- O domínio está na HostGator; quem tem acesso é o irmão (sócio). Vitor nunca cola senha no chat.
- O e-mail da empresa (sindico@guedesdeazevedo.com.br) usa o mesmo domínio: nunca mexer em
  registros MX na publicação.
- Vitor quer, numa fase 2, também receber um e-mail a cada pedido de orçamento.
