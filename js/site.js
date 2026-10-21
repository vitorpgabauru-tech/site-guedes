// Botão de modo escuro / claro.
// A escolha fica guardada no navegador do visitante (localStorage), com o nome "modo".

const botaoModo = document.getElementById('modo');

function atualizarRotulo() {
  const claro = document.documentElement.classList.contains('claro');
  // O rótulo diz o que o botão VAI fazer; é o que o leitor de tela fala para quem não enxerga
  botaoModo.setAttribute('aria-label', claro ? 'Mudar para o modo escuro' : 'Mudar para o modo claro');
}

// O "if" protege a página: se um dia o botão sair do HTML, o script não quebra o resto do site
if (botaoModo) {
  botaoModo.addEventListener('click', function () {
    // toggle: se tem "claro", tira; se não tem, coloca. Devolve true quando ficou claro
    const claro = document.documentElement.classList.toggle('claro');
    try {
      localStorage.setItem('modo', claro ? 'claro' : 'escuro');
    } catch (erro) {
      // Alguns navegadores (aba anônima, por exemplo) bloqueiam o localStorage.
      // O botão continua funcionando; só não lembra a escolha.
    }
    atualizarRotulo();
  });

  atualizarRotulo();
}

// Brilho que segue o mouse nos cartões das cinco frentes.
// A cada movimento, guardamos a posição do mouse (em relação ao cartão) nas variáveis --mx e --my;
// o CSS usa essas variáveis para posicionar o brilho vinho do fundo.
document.querySelectorAll('.cartao').forEach(function (cartao) {
  cartao.addEventListener('pointermove', function (evento) {
    const caixa = cartao.getBoundingClientRect();
    cartao.style.setProperty('--mx', (evento.clientX - caixa.left) + 'px');
    cartao.style.setProperty('--my', (evento.clientY - caixa.top) + 'px');
  });
});

// Abas em pílulas: destaca a aba da seção que está no meio da tela.
// O IntersectionObserver "vigia" as seções e avisa quando uma delas entra na faixa do meio da tela
// (rootMargin corta 45% de cima e 50% de baixo, sobrando uma faixa estreita no centro).
const abas = document.querySelectorAll('.aba');
const faixaAbas = document.querySelector('.abas');

function marcarAba(idSecao) {
  abas.forEach(function (aba) {
    const ativa = aba.getAttribute('href') === '#' + idSecao;
    aba.classList.toggle('ativa', ativa);
    if (ativa) {
      aba.setAttribute('aria-current', 'true');
      // No celular as abas rolam para o lado: centraliza a aba ativa dentro da faixa
      faixaAbas.scrollTo({ left: aba.offsetLeft - (faixaAbas.clientWidth - aba.offsetWidth) / 2, behavior: 'smooth' });
    } else {
      aba.removeAttribute('aria-current');
    }
  });
}

if (abas.length && 'IntersectionObserver' in window) {
  const vigia = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        marcarAba(entrada.target.id);
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  abas.forEach(function (aba) {
    const secao = document.querySelector(aba.getAttribute('href'));
    if (secao) {
      vigia.observe(secao);
    }
  });
}

// Diagnóstico rápido.
// Conta quantos itens foram marcados em cada frente e mostra um selo:
// nenhum = "Sem sinais", um = "Atenção", dois = "Prioridade".
// O botão "Continuar para o orçamento" leva às perguntas; lá os itens marcados entram na mensagem.
const caixasDiagnostico = document.querySelectorAll('.sintoma input');
const resumoDiagnostico = document.getElementById('resumo');
const linhasResultado = document.querySelectorAll('.linha-res');
const botaoEnviarDiagnostico = document.getElementById('enviar-diagnostico');

function atualizarDiagnostico() {
  const contagem = {};
  const marcados = [];

  caixasDiagnostico.forEach(function (caixa) {
    if (caixa.checked) {
      const frente = caixa.dataset.frente;
      contagem[frente] = (contagem[frente] || 0) + 1;
      // O texto do item está no <span> logo depois da caixinha
      marcados.push(caixa.nextElementSibling.textContent);
    }
  });

  if (marcados.length === 0) {
    resumoDiagnostico.textContent = 'Nenhum ponto marcado. Marque o que acontece no seu condomínio.';
  } else if (marcados.length === 1) {
    resumoDiagnostico.textContent = '1 ponto marcado. Veja onde agir primeiro:';
  } else {
    resumoDiagnostico.textContent = marcados.length + ' pontos marcados. Veja onde agir primeiro:';
  }

  linhasResultado.forEach(function (linha) {
    const quantidade = contagem[linha.dataset.frente] || 0;
    const selo = linha.querySelector('.selo');
    if (quantidade === 0) {
      selo.className = 'selo selo-ok';
      selo.textContent = 'Sem sinais';
    } else if (quantidade === 1) {
      selo.className = 'selo selo-atencao';
      selo.textContent = 'Atenção';
    } else {
      selo.className = 'selo selo-prioridade';
      selo.textContent = 'Prioridade';
    }
  });
}

if (botaoEnviarDiagnostico) {
  caixasDiagnostico.forEach(function (caixa) {
    caixa.addEventListener('change', atualizarDiagnostico);
  });
  atualizarDiagnostico();

  // Ao seguir para o orçamento, garante que a opção "incluir os pontos do diagnóstico" está marcada
  // (a pessoa pode ter desmarcado antes). O "input" avisa a prévia da mensagem para se atualizar.
  botaoEnviarDiagnostico.addEventListener('click', function () {
    const caixaIncluir = document.getElementById('incluir-diag-caixa');
    if (caixaIncluir && !caixaIncluir.checked) {
      caixaIncluir.checked = true;
      caixaIncluir.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
}

// Orçamento em etapas.
// Mostra uma pergunta por vez, não deixa avançar sem responder as obrigatórias
// e vai montando a prévia da mensagem (e o link do WhatsApp) a cada letra digitada.
const formOrcamento = document.getElementById('form-orcamento');

if (formOrcamento) {
  const passos = formOrcamento.querySelectorAll('.passo');
  const barras = formOrcamento.querySelectorAll('.progresso i');
  const infoPasso = document.getElementById('passo-info');
  const erroOrcamento = document.getElementById('erro-orcamento');
  const botaoVoltar = document.getElementById('orc-voltar');
  const botaoAvancar = document.getElementById('orc-avancar');
  const botaoEnviar = document.getElementById('orc-enviar');
  const previa = document.getElementById('previa-orcamento');
  const avisoDiagnostico = document.getElementById('incluir-diag');
  const caixaDiagnostico = document.getElementById('incluir-diag-caixa');
  const textoIncluirDiagnostico = document.getElementById('texto-incluir-diag');
  let passoAtual = 0;

  // Resposta de uma pergunta: a opção marcada (perfil) ou o texto digitado (demais)
  function respostaDoPasso(passo) {
    const marcada = passo.querySelector('input[type="radio"]:checked');
    if (marcada) {
      return marcada.value;
    }
    const campo = passo.querySelector('.campo');
    return campo ? campo.value.trim() : '';
  }

  // Itens marcados lá na seção de diagnóstico
  function pontosDoDiagnostico() {
    const pontos = [];
    caixasDiagnostico.forEach(function (caixa) {
      if (caixa.checked) {
        pontos.push(caixa.nextElementSibling.textContent);
      }
    });
    return pontos;
  }

  function montarMensagem() {
    const linhas = ['Olá! Vim pelo site e gostaria de um orçamento de síndico profissional.', ''];
    passos.forEach(function (passo) {
      const resposta = respostaDoPasso(passo);
      if (resposta) {
        linhas.push(passo.dataset.rotulo + ': ' + resposta);
      }
    });
    const pontos = pontosDoDiagnostico();
    if (pontos.length > 0 && caixaDiagnostico.checked) {
      linhas.push('', 'Pontos que preocupam (diagnóstico do site):');
      pontos.forEach(function (ponto) {
        linhas.push('- ' + ponto);
      });
    }
    return linhas.join('\n');
  }

  function atualizarPrevia() {
    const mensagem = montarMensagem();
    previa.textContent = mensagem;
    botaoEnviar.href = 'https://wa.me/5514998940464?text=' + encodeURIComponent(mensagem);
    const pontos = pontosDoDiagnostico().length;
    avisoDiagnostico.hidden = pontos === 0;
    // Singular e plural certinhos: "o 1 ponto marcado" / "os 3 pontos marcados"
    textoIncluirDiagnostico.textContent = pontos === 1
      ? 'Incluir o 1 ponto marcado no diagnóstico'
      : 'Incluir os ' + pontos + ' pontos marcados no diagnóstico';
  }

  function mostrarPasso(numero) {
    passos.forEach(function (passo, indice) {
      passo.hidden = indice !== numero;
    });
    barras.forEach(function (barra, indice) {
      barra.classList.toggle('feito', indice <= numero);
    });
    const opcional = !passos[numero].hasAttribute('data-obrigatorio');
    infoPasso.textContent = 'Pergunta ' + (numero + 1) + ' de ' + passos.length + (opcional ? ' · opcional' : '');
    // visibility (e não hidden) para o botão Continuar não "pular" de lugar
    botaoVoltar.style.visibility = numero === 0 ? 'hidden' : 'visible';
    const ultimo = numero === passos.length - 1;
    botaoAvancar.hidden = ultimo;
    botaoEnviar.hidden = !ultimo;
    erroOrcamento.textContent = '';
  }

  // "submit" acontece ao clicar em Continuar ou apertar Enter num campo
  formOrcamento.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o navegador de recarregar a página
    const passo = passos[passoAtual];
    if (passo.hasAttribute('data-obrigatorio') && !respostaDoPasso(passo)) {
      erroOrcamento.textContent = 'Responda esta pergunta para continuar.';
      return;
    }
    if (passoAtual < passos.length - 1) {
      passoAtual = passoAtual + 1;
      mostrarPasso(passoAtual);
      const campo = passos[passoAtual].querySelector('input');
      if (campo) {
        campo.focus();
      }
    }
  });

  botaoVoltar.addEventListener('click', function () {
    if (passoAtual > 0) {
      passoAtual = passoAtual - 1;
      mostrarPasso(passoAtual);
    }
  });

  // Qualquer digitação ou escolha atualiza a prévia e apaga a mensagem de erro
  formOrcamento.addEventListener('input', function () {
    erroOrcamento.textContent = '';
    atualizarPrevia();
  });

  // Marcar algo no diagnóstico também atualiza a prévia do orçamento
  caixasDiagnostico.forEach(function (caixa) {
    caixa.addEventListener('change', atualizarPrevia);
  });

  mostrarPasso(0);
  atualizarPrevia();
}

// Paralaxe dos prédios do topo: conforme o mouse anda pelo topo, guardamos em --px um número
// de -1 (mouse na esquerda) a 1 (mouse na direita). O CSS move cada prédio de acordo.
// Só em telas com mouse (no celular não há "passar o mouse").
const topo = document.getElementById('inicio');
const skyline = document.getElementById('skyline');

if (topo && skyline && window.matchMedia('(hover: hover)').matches) {
  topo.addEventListener('pointermove', function (evento) {
    const posicao = (evento.clientX / window.innerWidth) * 2 - 1;
    skyline.style.setProperty('--px', posicao.toFixed(2));
  });
  topo.addEventListener('pointerleave', function () {
    skyline.style.setProperty('--px', 0);
  });
}

// Botão "Falar sobre implantação": além de rolar até o orçamento (pelo href="#orcamento"),
// já marca "Construtora" na primeira pergunta e atualiza a prévia da mensagem.
const botaoConstrutora = document.getElementById('sou-construtora');
const opcaoConstrutora = document.querySelector('input[name="perfil"][value="Construtora"]');

if (botaoConstrutora && opcaoConstrutora) {
  botaoConstrutora.addEventListener('click', function () {
    opcaoConstrutora.checked = true;
    // Avisa o formulário que algo mudou, como se a pessoa tivesse clicado (atualiza a prévia)
    opcaoConstrutora.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

// Vistoria interativa: clicar num ponto do prédio mostra a ficha dele e esconde as outras.
// Os botões "Anterior" e "Próximo" andam em círculo (do último volta para o primeiro).
const pontosVistoria = document.querySelectorAll('.ponto');
const fichasVistoria = document.querySelectorAll('.ficha');
const navegacaoFicha = document.querySelector('.nav-ficha');
let pontoAtual = 1;

function mostrarPonto(numero) {
  pontoAtual = numero;
  fichasVistoria.forEach(function (ficha) {
    ficha.hidden = ficha.id !== 'ponto-' + numero;
  });
  pontosVistoria.forEach(function (ponto) {
    ponto.setAttribute('aria-pressed', ponto.dataset.ponto === String(numero));
  });
}

if (pontosVistoria.length && navegacaoFicha) {
  navegacaoFicha.hidden = false;
  const total = fichasVistoria.length;

  pontosVistoria.forEach(function (ponto) {
    ponto.addEventListener('click', function () {
      mostrarPonto(Number(ponto.dataset.ponto));
    });
  });

  // % (resto da divisão) faz a volta: depois do 6 vem o 1, antes do 1 vem o 6
  document.getElementById('ficha-proxima').addEventListener('click', function () {
    mostrarPonto((pontoAtual % total) + 1);
  });
  document.getElementById('ficha-anterior').addEventListener('click', function () {
    mostrarPonto(((pontoAtual + total - 2) % total) + 1);
  });

  mostrarPonto(1);
}

// Botão flutuante do WhatsApp: esconde enquanto o formulário de orçamento aparece na tela,
// para não cobrir o botão "Continuar". O IntersectionObserver avisa quando o formulário entra ou sai da tela.
const zapFlutuante = document.querySelector('.zap-flutua');
const formularioOrcamento = document.getElementById('form-orcamento');

if (zapFlutuante && formularioOrcamento && 'IntersectionObserver' in window) {
  const observadorZap = new IntersectionObserver(function (entradas) {
    zapFlutuante.classList.toggle('escondido', entradas[0].isIntersecting);
  });
  observadorZap.observe(formularioOrcamento);
}
