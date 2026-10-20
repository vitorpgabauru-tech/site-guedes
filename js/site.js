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