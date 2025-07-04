  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownViajantes");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  const contadores = {
    adultos: 1,
    criancas: 0,
    bebes: 0,
  };

  function alterarContador(tipo, valor) {
    contadores[tipo] = Math.max(0, contadores[tipo] + valor);
    if (tipo === "adultos" && contadores[tipo] < 1) contadores[tipo] = 1;
    document.getElementById(`${tipo}Count`).innerText = contadores[tipo];
  }

  function aplicarViajantes() {
    const total = contadores.adultos + contadores.criancas + contadores.bebes;
    const btn = document.querySelector(".btn-dropdown");
    btn.innerText = `${total} Viajante${total > 1 ? 's' : ''} - Todas as classes`;
    toggleDropdown();
  }