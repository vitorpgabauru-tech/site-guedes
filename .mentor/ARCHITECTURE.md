# Arquitetura — Site Guedes de Azevedo

> Se você não consegue explicar cada peça com as próprias palavras, não vai conseguir manter.
> Atualize quando entrar um arquivo, uma integração ou um fluxo novo.

Atualizado em: 2026-10-12

---

## Visão geral

Site estático de uma página só. Roda inteiro no navegador do visitante: não há servidor, banco
de dados nem login. A hospedagem só entrega os arquivos.

## Estrutura de pastas

```
site-guedes/
├── .mentor/          documentação do projeto (este arquivo e os outros)
├── index.html        o conteúdo: as 5 seções da página
├── css/
│   └── estilo.css    a aparência: cores, fontes, espaçamento, celular
├── js/
│   └── site.js       o comportamento: seleção de público e formulário
├── img/              logo e fotos
└── README.md
```

## Componentes

| Arquivo | Responsabilidade | Não é responsabilidade dele |
|---|---|---|
| index.html | o que está escrito na página e em que ordem | aparência e comportamento |
| css/estilo.css | como a página se parece em cada tamanho de tela | conteúdo |
| js/site.js | o que acontece quando o visitante clica ou envia | conteúdo fixo e aparência |

Regra que sustenta isso: cada coisa no seu arquivo. Para mudar um texto, mexe só no HTML; para
mudar uma cor, só no CSS. É o que impede uma alteração pequena de quebrar outra parte.

## Seções da página (index.html)

1. #inicio — frase principal + botão de WhatsApp
2. #servicos — seleção "construtora" / "condomínio existente"
3. #exemplos — cartões com exemplos de trabalho (sem nomes de condomínio)
4. #quem-somos — engenharia civil, CREA, FGV, equipe
5. #orcamento — formulário de interesse

## Fluxo do formulário de orçamento

1. Visitante preenche: nome, cidade, nome do condomínio, número de unidades (opcional),
   administradora atual.
2. Ao clicar em enviar, o js/site.js confere os campos obrigatórios.
3. O script monta o texto da mensagem e abre o endereço wa.me com o número da empresa e o texto.
4. O WhatsApp do visitante abre com a mensagem pronta; ele aperta enviar.

Nenhum dado fica guardado no site. (Fase 2: aviso também por e-mail — ver ADR-002.)

## Integrações externas

| Serviço | Para quê | Se cair |
|---|---|---|
| WhatsApp (wa.me) | receber pedidos de orçamento | o telefone e o e-mail continuam visíveis na página |
