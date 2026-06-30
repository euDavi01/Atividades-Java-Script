let numeroSecreto;
let acertou;
let resultado = document.getElementById("resultado");

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 50) + 1;
  acertou = false;
  resultado.innerHTML = "";
  jogar();
}

function jogar() {
  let palpite = prompt("Adivinhe um número de 1 a 50:");
  if (palpite === null) {
    return; 
  }
  palpite = parseInt(palpite);

  if (isNaN(palpite)) {
    resultado.innerHTML = "<p class='resultado erro'>Digite um número válido!</p>";
    jogar();
    return;
  }

  if (palpite === numeroSecreto) {
    resultado.innerHTML = "<p class='resultado vitoria'> Parabéns. Você acertou o número " + numeroSecreto + "!</p>";
    acertou = true;
  }
  else if (palpite < numeroSecreto) {
    resultado.innerHTML = "<p class='resultado dica'> O número secreto é MAIOR que " + palpite + "</p>";
    jogar();
  }
  else if (palpite > numeroSecreto) {
    resultado.innerHTML = "<p class='resultado dica'> O número secreto é MENOR que " + palpite + "</p>";
    jogar();
  }
}