
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let acertou = false;

while (!acertou) {

  let palpite = prompt("Adivinhe um número de 1 a 50:");
  palpite = parseInt(palpite);
  
  if (palpite === numeroSecreto) {
    alert("Parabéns! Você acertou o número é" + numeroSecreto + "!");
    acertou = true;
  }
  else if (palpite < numeroSecreto) {
    alert("Você errou! O número secreto é __MAIOR__ que " + palpite);
  }
  else if (palpite > numeroSecreto) {
    alert("Você errou! O número secreto é __MENOR__ que " + palpite);
  }
}