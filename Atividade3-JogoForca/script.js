let palavras = ["javascript", "computador", "programacao", "desenvolvedor", "navegador", "internet", "software", "hardware", "funcao", "variavel", "array", "objeto", "string", "numero", "algoritmo"];
let palavraSecreta;
let letrasPalavra;
let tabuleiro;
let tentativas;
let letrasChutadas;
let jogo_ativo;
let palavraDisplay = document.getElementById("palavraDisplay");
let tentativasDisplay = document.getElementById("tentativas");
let letrasChutadasDisplay = document.getElementById("letrasChutadas");
let inputLetra = document.getElementById("inputLetra");
let resultadoDisplay = document.getElementById("resultado");

function iniciarJogo() {
  palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  letrasPalavra = palavraSecreta.split("");
  tabuleiro = [];
  for (let i = 0; i < letrasPalavra.length; i++) {
    tabuleiro[i] = "_";
  }
  tentativas = 6;
  letrasChutadas = [];
  jogo_ativo = true;
  inputLetra.value = "";
  resultadoDisplay.innerHTML = "";
  inputLetra.focus();
  atualizarDisplay();
}

function enviarLetra() {
  if (!jogo_ativo) {
    iniciarJogo();
    return;
  }
  let letra = inputLetra.value.toLowerCase();
  inputLetra.value = "";
  inputLetra.focus();
  
  if (letra === "") {
    return;
  }
  
  if (letra.length > 1) {
    mostrarAviso("Digite apenas uma letra");
    return;
  }
  
  if (letrasChutadas.includes(letra)) {
    mostrarAviso("Você ja chutou essa letra");
    return;
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
  atualizarDisplay();
  
  if (tabuleiro.join("") === palavraSecreta) {
    mostrarVitoria();
  }
  if (tentativas === 0 && tabuleiro.join("") !== palavraSecreta) {
    mostrarDerrota();
  }
}
function atualizarDisplay() {
  palavraDisplay.textContent = tabuleiro.join(" ");
  tentativasDisplay.textContent = tentativas;
  letrasChutadasDisplay.textContent = letrasChutadas.length > 0 ? letrasChutadas.join(", ") : "-";
}
function mostrarVitoria() {
  jogo_ativo = false;
  resultadoDisplay.innerHTML = "<p>Parabens. Você acertou a palavra: <strong>" + palavraSecreta + "</strong></p><p style='margin-top: 10px;'>Clique em 'Novo Jogo' para jogar novamente</p>";
  resultadoDisplay.className = "resultado vitoria";
  inputLetra.disabled = true;
}
function mostrarDerrota() {
  jogo_ativo = false;
  resultadoDisplay.innerHTML = "<p>Você perdeu. A palavra era: <strong>" + palavraSecreta + "</strong></p><p style='margin-top: 10px;'>Clique em 'Novo Jogo' para jogar novamente</p>";
  resultadoDisplay.className = "resultado derrota";
  inputLetra.disabled = true;
}
function mostrarAviso(mensagem) {
  resultadoDisplay.textContent = mensagem;
  resultadoDisplay.className = "resultado aviso";
  setTimeout(() => {
    resultadoDisplay.textContent = "";
  }, 2000);
}

window.onload = function() {
  iniciarJogo();
}