const urlAPI = 'https://fakestoreapi.com/products';

//1 - exibir todos os produtos da base de dados

const showAllProducts = async () => {
  try {
    const res = await fetch(urlAPI);
    const json = await res.json();
    return json;
  } catch (erro) {
    return erro.message;
  }
};
//showAllProducts();

//2 - Exibir os dados de um produto a partir do id de um produto fornecido;

const showProductById = async id => {
  try {
    const res = await fetch(urlAPI + `/${id}`);
    const json = await res.json();
    return json;
  } catch (erro) {
    return erro.message;
  }
};
//showProductById(6);

//3 - exibir todos as categorias de produtos;

const showAllCategories = async () => {
  try {
    const res = await fetch(urlAPI + '/categories');
    const json = await res.json();
    return json;
  } catch (erro) {
    return erro.message;
  }
};
//showAllCategories();

//4 - exibir todos os produtos de uma categoria

const showAllProductsInACategory = async category => {
  try {
    const res = await fetch(urlAPI + `/category/${category}`);
    const json = await res.json();
    return json;
  } catch (erro) {
    return erro.message;
  }
};
//showAllProductsInACategory('electronics');

//5 - exibir todos os produtos com rate acima de 4;
const showProductsWithRateAbove4 = async () => {
  try {
    const res = await fetch(urlAPI);
    const json = await res.json();
    const productsWithRateAbove4 = json.filter(
      product => product.rating.rate > 4,
    );
    return productsWithRateAbove4;
  } catch (erro) {
    return erro.message;
  }
};

//showProductsWithRateAbove4();

//6 - exibir o produto com mais votos;

const showProductWithMostVotes = async () => {
  try {
    const res = await fetch(urlAPI);
    const json = await res.json();
    const productWithMoreVotes = json.reduce((accProduct, product) => {
      return product.rating.count > accProduct.rating.count
        ? product
        : accProduct;
    });
    return productWithMoreVotes;
  } catch (erro) {
    return erro.message;
  }
};

//showProductWithMostVotes();

//7 - exibir o cálculo da média de preços de todos os produtos;
const showAverageProductPrices = async () => {
  try {
    const res = await fetch(urlAPI);
    const json = await res.json();
    const prices = json.map(product => product.price);
    const sumPrices = prices.reduce((total, price) => total + price, 0);
    const averagePrices = sumPrices / json.length;
    return averagePrices;
  } catch (erro) {
    return erro.message;
  }
};

//showAverageProductPrices();

//8 - exibir o produto mais caro
const showMostExpensiveProduct = async () => {
  try {
    const res = await fetch(urlAPI);
    const json = await res.json();
    const moreExpensiveProduct = json.reduce(
      (accMoreExpensive, currProduct) => {
        return accMoreExpensive.price > currProduct.price
          ? accMoreExpensive
          : currProduct;
      },
      json[0],
    );
    return moreExpensiveProduct;
  } catch (erro) {
    return erro.message;
  }
};
//showMoreExpensiveProduct();
//9 - exibir o produto mais barato
const showMostCheapProduct = async () => {
  try {
    const res = await fetch(urlAPI);
    const json = await res.json();
    const moreCheapProduct = json.reduce((accMoreCheap, currMoreCheap) => {
      return accMoreCheap.price < currMoreCheap.price
        ? accMoreCheap
        : currMoreCheap;
    }, json[0]);
    return moreCheapProduct;
  } catch (erro) {
    return erro.message;
  }
};
//showMoreCheapProduct();

export {
  showAllProducts,
  showProductById,
  showAllCategories,
  showAllProductsInACategory,
  showProductsWithRateAbove4,
  showProductWithMostVotes,
  showAverageProductPrices,
  showMostExpensiveProduct,
  showMostCheapProduct,
};
