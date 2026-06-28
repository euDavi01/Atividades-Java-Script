let escolhaUsuario = prompt("Digite sua escolha: pedra, papel ou tesoura");
escolhaUsuario = escolhaUsuario.toLowerCase();

let numeroAleatorio = Math.floor(Math.random() * 3);

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
if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura") {
  alert("Erro. Você só pode digitar pedra, papel ou tesoura. Tente de novo.");
}
else {
  let resultado;
  if (escolhaUsuario === escolhaComputador) {
    resultado = "EMPATE";
  }
  else if ((escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
           (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
           (escolhaUsuario === "tesoura" && escolhaComputador === "papel")) {
    resultado = "VOCÊ VENCEU";
  }
  else {
    resultado = "VOCÊ PERDEU";
  }
  alert("Você escolheu: " + escolhaUsuario + "\nO computador escolheu: " + escolhaComputador + "\n\n" + resultado);
}