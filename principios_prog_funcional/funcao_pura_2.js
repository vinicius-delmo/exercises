//Função Pura ou impura?
//É uma função impura

function gerarNumerAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumerAleatorio(1, 10000));
console.log(gerarNumerAleatorio(1, 10000));
console.log(gerarNumerAleatorio(1, 10000));
  