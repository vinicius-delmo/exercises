//Wrapper

//Array é um functor

const nums = [1, 2, 3, 4];
nums.map(el => el + 10);
console.log();

function tipoSeguro(valor) {
  return {
    valor,
    map(fn) {
      return tipoSeguro(fn(this.valor));
    },
  };
}

const resultado = tipoSeguro('Esse é um texto')
  .map(t => t.toUpperCase())
  .map(t => `${t}!!!`)
  .map(t => t.split('').join(' '));

console.log(resultado.valor);


