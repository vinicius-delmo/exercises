//1. apenas elementos fragil: true
//2. qtd preço
//3. media dos totais

const cart = [
  { name: "Caneta", qtd: 10, price: 7.9, fragile: true },
  { name: "Lapis", qtd: 5, price: 4.9, fragile: true },
  { name: "Borracha", qtd: 2, price: 2.2, fragile: false },
  { name: "Caderno", qtd: 2, price: 2.2, fragile: false },
  { name: "Giz", qtd: 2, price: 2.2, fragile: true },
];

const filterFragileProduct = (item) => item.fragile;
const sumTotalProcut = (item) => item.qtd * item.price;
const averageTotals = (acc, curr) => acc + curr;

const average = cart
  .filter(filterFragileProduct)
  .map(sumTotalProcut)
  .reduce(averageTotals);
console.log(average);
