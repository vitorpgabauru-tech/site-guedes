# Estado do projeto — Site Guedes de Azevedo

> Memória do projeto entre sessões. Cole este arquivo no início de uma conversa nova para
> retomar de onde parou. Máximo uma página. Atualize ao fim de toda etapa concluída e testada.

Atualizado em: 2026-10-13 (protótipo visual aprovado)

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
Última etapa concluída: protótipo visual aprovado em 2026-10-13 (prototipo/prototipo.html, ver ADR-004)
Próxima etapa: levar o protótipo para o index.html, uma seção por vez, começando pelas cores
(modo escuro/claro) e pelo topo com a curva vinho

## Já funciona

- topo com chamada principal e botão de WhatsApp para (14) 99894-0464
- seção de serviços com cartão para construtoras e cartão para condomínios
- demais seções só com título
- css/estilo.css com cores da marca, fontes Montserrat e Open Sans, base responsiva
- código no GitHub

## Ainda não funciona

- tudo do protótipo ainda precisa ser levado para o index.html
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
- Formato das instruções: trocas sempre como "Localizar" / "Substituir por" (texto completo, de preferência
  uma linha, para usar no Ctrl + H). Textos novos: indicar a linha âncora e colar depois dela.
- WhatsApp oficial da empresa: (14) 99894-0464 (wa.me/5514998940464).
- O domínio está na HostGator; quem tem acesso é o irmão (sócio). Vitor nunca cola senha no chat.
- O e-mail da empresa (sindico@guedesdeazevedo.com.br) usa o mesmo domínio: nunca mexer em
  registros MX na publicação.
- Vitor quer, numa fase 2, também receber um e-mail a cada pedido de orçamento.
