let a = 1;
console.log(a);

let p = new Promise((resolve, reject) => {
  resolve(["Bia", "Carlos", "André"]);
});

p.then((nomeLista) => nomeLista[0])
  .then((primeiraLetraNome) => primeiraLetraNome[1])
  .then((exibePrimeiraLetra) => console.log(exibePrimeiraLetra));
