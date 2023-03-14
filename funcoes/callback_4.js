const carrinho = [
  { name: "Caneta", qtd: 10, preco: 7.9 },
  { name: "Lapis", qtd: 0, preco: 4.9 },
  { name: "Borracha", qtd: 2, preco: 2.2 },
];

const getName = (item) => item.name;
const qtsMaiorQueZero = (item) => item.qtd > 0;
const productsValid = carrinho.filter(qtsMaiorQueZero).map(getName);
console.log(productsValid);
