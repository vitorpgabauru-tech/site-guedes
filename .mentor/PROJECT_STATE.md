# Estado do projeto — Site Guedes de Azevedo

> Memória do projeto entre sessões. Cole este arquivo no início de uma conversa nova para
> retomar de onde parou. Máximo uma página. Atualize ao fim de toda etapa concluída e testada.

Atualizado em: 2026-10-12 (fim do Marco 1)

---

## O que é

Novo site da Guedes de Azevedo Síndico Profissional (sindico.guedesdeazevedo.com.br), feito à mão,
para substituir o site atual do construtor de sites (largura fixa, não funciona no celular, sem
WhatsApp, sem diferencial técnico, com erros de português).

Objetivo: quem entra entende o serviço, vê exemplos do trabalho e pede orçamento.

Para quem: construtoras que vão implantar condomínios e condomínios existentes (síndicos,
conselheiros, moradores) em Bauru e Marília.
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
Última etapa concluída e testada: Marco 1 fechado (estrutura, CSS base, push para o GitHub)
Próxima etapa: topo completo com chamada principal e botão de WhatsApp

## Já funciona

- index.html com as 5 seções (só títulos)
- css/estilo.css com cores da marca, fontes Montserrat e Open Sans, base responsiva
- código no GitHub

## Ainda não funciona

- textos das seções, botão de WhatsApp, interatividade, formulário

## Decisões que não se reabrem

- Site estático em HTML/CSS/JS puro, uma página só (ADR-001)
- Formulário de orçamento abre o WhatsApp com a mensagem pronta (ADR-002)
- Bild e Vitta não aparecem no site: não têm relação com a empresa
- Exemplos de trabalho sem nome de condomínio

## Problemas conhecidos

- nenhum

## Contexto que o mentor precisa saber

- Vitor é iniciante: já mexeu com HTML, mas pouco. Explicar conceitos novos com analogia.
- O domínio está na HostGator; quem tem acesso é o irmão (sócio). Vitor nunca cola senha no chat.
- O e-mail da empresa (sindico@guedesdeazevedo.com.br) usa o mesmo domínio: nunca mexer em
  registros MX na publicação.
- Vitor quer, numa fase 2, também receber um e-mail a cada pedido de orçamento.
