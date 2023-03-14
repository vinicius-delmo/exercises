const carrinho = [
  { name: "Caneta", qtd: 10, preco: 7.9 },
  { name: "Lapis", qtd: 0, preco: 4.9 },
  { name: "Borracha", qtd: 2, preco: 2.2 },
];

const getTotal = (item) => item.qtd * item.preco;
const somar = (acc, curr) => acc + curr;

const totalGeral = carrinho.map(getTotal).reduce(somar);
console.log(totalGeral);
