# Estado do projeto — Site Guedes de Azevedo

> Memória do projeto entre sessões. Cole este arquivo no início de uma conversa nova para
> retomar de onde parou. Máximo uma página. Atualize ao fim de toda etapa concluída e testada.

Atualizado em: 2026-10-20 (Etapa 21)

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
| Hospedagem | HostGator, Plano M, cPanel; pasta /public_html/sindico (ADR-003) |
| Fontes | Montserrat e Open Sans no próprio site (css/fontes, licença OFL) |
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

Marco atual: M5 — Publicação
Última etapa concluída: Etapas 18 e 19 (construtoras, vistoria, prédios sólidos)
Em revisão: Etapa 20, revisão final: fontes locais (css/fontes), ícones, Open Graph (img/compartilhar.jpg),
dados para o Google (JSON-LD), descrição nova e correções de texto
No ar desde 2026-10-20 (parte 1 da publicação). Próxima etapa: parte 2 (limpeza do site antigo), HTTPS e teste de e-mail
Para atualizar o site: refazer o site-novo-publicar.zip, subir em public_html/sindico e extrair por cima
Ao mudar css/estilo.css ou js/site.js: aumentar o "?v=" dos dois links no index.html (o navegador guarda CSS e JS por 1 dia)
Ordem das seções (2026-10-20): Nossa gestão → Equipe → Vistoria → Diagnóstico → Orçamento → (Exemplos, escondida) → Construtoras
Em espera: Exemplos do nosso trabalho (Vitor está reunindo 3 ou 4 casos: tipo, tamanho, cidade, problema, solução)
Observação: o menu da barra virou as abas em pílulas; ao criar uma seção nova, acrescentar a aba dela
Observação: os links do menu apontam para as seções atuais e mudam conforme as seções do protótipo entram

## Já funciona

- cores do protótipo com modo escuro padrão e modo claro (botão sol/lua, escolha salva no localStorage)
- topo com texto do protótipo, prédios animados, botão de WhatsApp (14) 99894-0464, slogan, curva vinho e faixa de valores
- barra fixa com logo, sol/lua, Pedir orçamento e abas em pílulas (seção atual destacada)
- WhatsApp flutuante com balão (balão só no computador)
- topo: 5 prédios em foto (img/predio-1..5.webp, renders autorizados, fundo recortado de _fotos_tmp) sobem ao abrir e se mexem com o mouse
- seção #vistoria: prédio em corte com 6 pontos clicáveis e ficha de cada um (anterior/próximo)
- seção #construtoras: checklist da implantação; botão leva ao orçamento com "Construtora" marcado
- seção #quem-somos: equipe com credenciais e 5 cartões
- seção #orcamento: perfil, nome, cidade, condomínio, unidades (opcional), administradora (opcional);
  inclui os pontos do diagnóstico se houver; prévia ao vivo; nada fica guardado no site
- seção #diagnostico: 10 situações para marcar, resultado por frente (sem sinais / atenção / prioridade)
  e botão que envia os pontos marcados pelo WhatsApp
- seção #gestao: cinco frentes em cartões <details> (um aberto por vez), com brilho que segue o mouse
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
- Interação no estilo de gorgonoid.com/links: cartões, abas em pílulas, WhatsApp flutuante (ADR-005)

## Problemas conhecidos

- A pasta /public_html/sindico tem, além do site antigo do construtor, um WordPress abandonado desde 2016
  (tema de casamento, WooCommerce, LayerSlider, Revolution Slider) recebendo acessos e gerando erros
  (error_log de 12 MB). É uma porta de entrada para ataques: sai na publicação.
- Há um backup antigo, bkp(15.05.17).zip (72 MB), dentro da pasta pública: qualquer pessoa que souber o nome
  pode baixá-lo. Sai na publicação.
- Backup completo do site antigo feito em 2026-10-20 (site-antigo-2026-10-20.zip, no computador do Vitor).
- O .htaccess antigo manda celulares para index_mobile.html; o site novo traz um .htaccess próprio.

## Contexto que o mentor precisa saber

- Vitor é iniciante: já mexeu com HTML, mas pouco. Explicar conceitos novos com analogia.
- Fluxo de trabalho (desde 2026-10-20): o mentor aplica as mudanças direto nos arquivos da pasta (ligação
  com o computador) e testa antes; Vitor revisa no Source Control (Ctrl + Shift + G), testa no navegador e
  faz o commit. Se ele pedir para voltar ao modo manual: trocas como "Localizar" / "Substituir por" (Ctrl + H).
- Comandos do Git sempre num bloco só (add, commit, push); comandos destrutivos separados.
- WhatsApp oficial da empresa: (14) 99894-0464 (wa.me/5514998940464). Fixo: (14) 3243-0464.
- E-mail oficial de contato no site: sindico@guedesdeazevedo.com.br (decidido em 2026-10-20).
- Endereço: Rua Azarias Leite, 18-45, sala 1, Jardim Estoril, Bauru/SP.
- Logo original: OneDrive\GUEDES DE AZEVEDO - SINDICO PROFISSIONAL\MATERIAL DIVULGAÇÃO\logo.pdf
  (o site usa recortes em img/: ícone e nome, cada um em versão para modo claro e escuro).
- O domínio está na HostGator; quem tem acesso é o irmão (sócio). Vitor nunca cola senha no chat.
- O e-mail da empresa (sindico@guedesdeazevedo.com.br) usa o mesmo domínio: nunca mexer em
  registros MX na publicação.
- Vitor quer, numa fase 2, também receber um e-mail a cada pedido de orçamento.
