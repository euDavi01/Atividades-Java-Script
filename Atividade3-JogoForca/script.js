let palavras = ["javascript", "computador", "programacao", "desenvolvedor", "navegador", "internet", "software", "hardware", "funcao", "variavel", "array", "objeto", "string", "numero", "algoritmo"];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

let letrasPalavra = palavraSecreta.split("");

let tabuleiro = [];
for (let i = 0; i < letrasPalavra.length; i++) {
  tabuleiro[i] = "_";
}

let tentativas = 6;
let acertou = false;
let letrasChutadas = [];

while (tentativas > 0 && !acertou) {
  let estado = tabuleiro.join(" ");
  let mensagem = "Palavra: " + estado + "\nTentativas restantes: " + tentativas + "\nLetras chutadas: " + letrasChutadas.join(", ");
  
  let letra = prompt(mensagem + "\n\nDigite uma letra:");
  letra = letra.toLowerCase();
  
  if (letrasChutadas.includes(letra)) {
    alert("Você já chutou essa letra");
    continue;
  }
  
  letrasChutadas.push(letra);

  let encontrou = false;
  for (let i = 0; i < letrasPalavra.length; i++) {
    if (letrasPalavra[i] === letra) {
      tabuleiro[i] = letra;
      encontrou = true;
    }
  }
  
  if (!encontrou) {
    tentativas = tentativas - 1;
  }
  
  if (tabuleiro.join("") === palavraSecreta) {
    acertou = true;
    alert("Parabéns! Você acertou a palavra: " + palavraSecreta);
  }
}

if (tentativas === 0 && !acertou) {
  alert("Você perdeu. A palavra era: " + palavraSecreta);
}