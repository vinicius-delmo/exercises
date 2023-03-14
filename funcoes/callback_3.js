const numbers = [1, 2, 3, 4, 5];
const double = (n) => n * 2;
console.log(numbers.map(double));

const names = ["Ana", "Bia", "Carlos"];
const firstLetter = (text) => text[0];
console.log(names.map(firstLetter));

Array.prototype.meuMap = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

const carrinho = [
  { name: "Caneta", qtd: 10, preco: 7.9 },
  { name: "Lapis", qtd: 5, preco: 4.9 },
  { name: "Borracha", qtd: 2, preco: 2.2 },
];

const getName = (item) => item.name;
console.log(carrinho.meuMap(getName));

const getTotal = (item) => item.qtd + item.preco;
const totais = carrinho.meuMap(getTotal);
console.log(totais);
