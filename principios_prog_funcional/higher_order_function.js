//Funções que operam em putras funções
//tomando-as como argumentos e retornando-as
// são chamadas de higher-order functions

function executar(fn, ...params) {
  return fn(...params);
}

function somar(a, b, c) {
  return a + b + c;
}

function mult(a, b) {
  return a * b;
}

const r1 = executar(somar, 4, 5, 6);
const r2 = executar(mult, 4, 5);

console.log(r1, r2);
