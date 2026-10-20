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
// Também monta o link do WhatsApp com os itens marcados.
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

  // Mensagem do WhatsApp. "\n" é quebra de linha.
  let mensagem = 'Olá! Fiz o diagnóstico no site da Guedes de Azevedo e gostaria de conversar sobre a gestão do meu condomínio.';
  if (marcados.length > 0) {
    mensagem += '\n\nPontos que preocupam:\n- ' + marcados.join('\n- ');
  }
  // encodeURIComponent faz automaticamente o que fizemos à mão no botão do topo:
  // troca espaço por %20, "á" por %C3%A1, quebra de linha por %0A...
  botaoEnviarDiagnostico.href = 'https://wa.me/5514998940464?text=' + encodeURIComponent(mensagem);
}

if (botaoEnviarDiagnostico) {
  caixasDiagnostico.forEach(function (caixa) {
    caixa.addEventListener('change', atualizarDiagnostico);
  });
  atualizarDiagnostico();
}
