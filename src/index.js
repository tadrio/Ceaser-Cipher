const $mensagem = document.getElementById("mensagem");
const $cifra = document.querySelector(".cifra");
const $campo = document.querySelector(".area");
const $btEscrever = document.querySelector(".button-escrever");
const $btLer = document.querySelector(".button-ler");

const alfabeto = "abcdefghijklmnopqrstuvwxyz";

const escrever = (mensagem) => {
  const cifra = Number($cifra.value);
  let cifrado = "";
  for (const letra of mensagem) {
    for (let i = 0; i < alfabeto.length; i++) {
      if (letra === alfabeto[i]){
        if (cifra >= alfabeto.length) {
          cifrado += alfabeto[i + (cifra % alfabeto.length)];
        } else {
          cifrado += alfabeto[i + cifra];
        }
      }
    }
  }
  return cifrado;
};

$btEscrever.addEventListener('click', function(){
  event.preventDefault();
  $campo.value = escrever($mensagem.value);
});

const ler = (mensagem) => {
  const cifra = Number($cifra.value);
  let cifrado = "";
  for (const letra of mensagem) {
    for (let i = 0; i < alfabeto.length; i++) {
      if (letra === alfabeto[i]){
        if (cifra >= alfabeto.length) {
          cifrado += alfabeto[i - (cifra % alfabeto.length)];
        } else if ((i - cifra) < 0){
          cifrado += alfabeto[alfabeto.length + (i - cifra)];
        } else
        cifrado += alfabeto[i - cifra];
      }
    }
  }
  return cifrado;
};

$btLer.addEventListener('click', function(){
  event.preventDefault();
  $campo.value = ler($mensagem.value);
});
