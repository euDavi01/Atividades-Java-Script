let resultado = document.getElementById("resultado");

function jogar(escolhaUsuario) {
  escolhaUsuario = escolhaUsuario.toLowerCase();
  let numeroAleatorio = Math.floor(Math.random()*3);
  let escolhaComputador;

  if (numeroAleatorio === 0) {
    escolhaComputador = "pedra";
  }
  else if (numeroAleatorio === 1) {
    escolhaComputador = "papel";
  }
  else if (numeroAleatorio === 2) {
    escolhaComputador = "tesoura";
  }
  let resultadoJogo;
  let classe;

  if (escolhaUsuario === escolhaComputador) {
    resultadoJogo = "Empate";
    classe = "empate";
  }
  else if ((escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
           (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
           (escolhaUsuario === "tesoura" && escolhaComputador === "papel")) {
    resultadoJogo = "Você Venceu";
    classe = "vitoria";
  }
  else {
    resultadoJogo = "Você Perdeu";
    classe = "derrota";
  }
  resultado.innerHTML = "<p>Você escolheu: <strong>" + escolhaUsuario + "</strong></p><p>Computador escolheu: <strong>" + escolhaComputador + "</strong></p><p style='margin-top: 15px; font-size: 1.3em;'>" + resultadoJogo + "</p>";
  resultado.className = "resultado " + classe;
}