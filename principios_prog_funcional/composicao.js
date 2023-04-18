function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}

function TornarLento(texto) {
  return texto.split('').join(' ');
}

const exagerado = composicao(gritar, enfatizar, TornarLento);

const resultado1 = exagerado('Para');
const resultado2 = exagerado('Cuidado com o buraco');
console.log(resultado1);
console.log(resultado2);
