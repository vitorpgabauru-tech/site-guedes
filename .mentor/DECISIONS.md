# Decisões técnicas — Site Guedes de Azevedo

> Uma entrada por decisão cara de reverter. Não apague as antigas: quando uma decisão muda, a
> antiga vira "substituída" e aponta para a nova.

Atualizado em: 2026-10-12

---

## Índice

| # | Decisão | Status | Data |
|---|---|---|---|
| 001 | Site estático em HTML/CSS/JS puro | aceita | 2026-10-12 |
| 002 | Formulário de orçamento via WhatsApp | aceita | 2026-10-12 |
| 003 | Hospedagem | pendente | 2026-10-12 |
| 004 | Posicionamento, visual e estrutura da página | aceita | 2026-10-13 |
| 005 | Referência de interação: gorgonoid.com/links | aceita | 2026-10-20 |

---

## ADR-001 — Site estático em HTML/CSS/JS puro

Data: 2026-10-12
Status: aceita

Contexto
O site atual foi feito num construtor de sites com largura fixa de 1024px e não se adapta ao
celular. Vitor quer desenvolver o próprio site e está aprendendo.

Opções
- Continuar no construtor de sites: rápido, mas mantém as limitações e ele não aprende.
- WordPress: muitos recursos, mas exige servidor, plugins e atualização constante.
- HTML/CSS/JS puro: ele entende cada linha, não tem servidor para cair nem atualizar.

Decisão
HTML, CSS e JavaScript puros, uma página só.

Justificativa
O conteúdo é institucional e muda pouco. Sem servidor não há o que invadir nem pagar, e é a
base de qualquer tecnologia web que ele aprender depois.

Consequências
Ganha: controle total, velocidade, custo zero de software, aprendizado real.
Perde: para mudar um texto é preciso editar o código (não há painel de edição).

Revisar se
A empresa quiser publicar conteúdo com frequência (blog, notícias) sem mexer em código.

---

## ADR-002 — Formulário de orçamento via WhatsApp

Data: 2026-10-12
Status: aceita

Contexto
O visitante precisa demonstrar interesse em orçamento. Vitor também gostaria de receber o aviso
por e-mail.

Opções
- A: o JavaScript monta a mensagem e abre o WhatsApp do visitante já endereçado à empresa.
- B: o formulário envia um e-mail para a empresa (serviço externo ou código no servidor).

Decisão
Opção A no MVP. Opção B entra como fase 2, somando-se à A.

Campos: nome, cidade, nome do condomínio, número de unidades (opcional, "se souber"),
administradora atual.

Justificativa
A opção A não precisa de servidor, funciona em qualquer hospedagem e o site não guarda dado
pessoal de ninguém. A conversa já começa no canal que a empresa mais usa.

Consequências
Ganha: zero infraestrutura, contato imediato no WhatsApp.
Perde: se o visitante não tiver WhatsApp no aparelho, ou desistir antes de apertar enviar, o
pedido se perde. Não há aviso por e-mail no MVP.

Revisar se
Na fase 2 (e-mail): ao guardar ou enviar dados pessoais, incluir aviso de privacidade (LGPD) e
caixa de consentimento.

---

## ADR-003 — Hospedagem

Data: 2026-10-12
Status: pendente

Contexto
O domínio guedesdeazevedo.com.br está na HostGator. O site atual parece usar o criador de sites
da HostGator. O e-mail da empresa usa o mesmo domínio.

Opções
- Se o plano da HostGator tiver cPanel: subir os arquivos lá, sem mexer no domínio.
- Se não tiver: hospedagem estática gratuita (GitHub Pages ou Cloudflare Pages) e alterar apenas
  o registro do subdomínio "sindico". Os registros MX (e-mail) nunca são tocados.

Decisão
A definir quando o irmão confirmar se o plano tem cPanel. Limites dos serviços gratuitos devem
ser verificados na data da publicação.

---

## ADR-004 — Posicionamento, visual e estrutura da página

Data: 2026-10-13
Status: aceita

Contexto
O primeiro rascunho dava o mesmo peso a construtoras e a condomínios existentes, com destaque
para a implantação. O cliente que a empresa mais quer hoje é o condomínio já entregue que precisa
de melhorias na gestão.

Decisão
- Público principal: condomínios já entregues. Construtoras numa seção secundária, mais abaixo.
- Cinco frentes em destaque: controle e transparência financeira, segurança patrimonial moderna,
  cumprimento real das regras, valorização do imóvel, manutenção e funcionamento pleno.
- Engenharia como diferencial dentro de uma gestão completa (financeiro, administrativo, jurídico,
  operacional, comunicação).
- Visual: continuidade com o folder (prédios, curva vinho, valores do banner). Modo escuro como
  padrão, com botão para o modo claro; a escolha fica salva no navegador (localStorage).
- Interações: abas das cinco frentes, diagnóstico "Como está o seu condomínio hoje?" que leva os
  pontos marcados para a mensagem, prédio clicável da vistoria e orçamento em etapas pelo WhatsApp.
- Equipe: Vitor (financeiro e manutenção), Arlindo (obras e manutenção), Bruno (jurídico),
  Silvia (operacional de limpeza e jardinagem) e Flavia (comunicação, notificações e multas).
- Modelo de referência: prototipo/prototipo.html.

Consequências
Ganha: mensagem clara para o cliente certo e interatividade que demonstra o serviço.
Perde: mais JavaScript para o Vitor aprender e manter; a página fica mais longa.

Revisar se
A empresa mudar de foco comercial ou a equipe mudar (atualizar a seção Equipe).

---

## ADR-005 — Referência de interação: gorgonoid.com/links

Data: 2026-10-20
Status: aceita (complementa a ADR-004, não substitui)

Contexto
Vitor gostou do layout e da interatividade de https://www.gorgonoid.com/links e quer algo parecido.

O que foi aproveitado
- Títulos de seção com linha pequena em vinho (eyebrow) e título grande e encorpado.
- Cartões escuros com degradê, borda fina, cantos bem arredondados, ícone num quadrado à esquerda,
  seta redonda à direita e brilho vinho que acompanha o mouse; leve elevação ao passar o mouse.
- A seguir: barra de abas em "pílulas" grudada no alto que destaca a seção visível, e botão flutuante de
  WhatsApp com balão de chamada.

O que continua da ADR-004
Identidade do folder (vinho, prédios, curva), modo escuro padrão, foco em condomínios já entregues.

Consequências
Ganha: página mais navegável e "clicável", com o conteúdo detalhado escondido até a pessoa pedir.
Perde: mais CSS para manter; o conteúdo dentro dos cartões fecha por padrão (o Google lê mesmo assim).
