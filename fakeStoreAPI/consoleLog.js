import {
  showAllProducts,
  showProductById,
  showAllCategories,
  showAllProductsInACategory,
  showProductsWithRateAbove4,
  showProductWithMostVotes,
  showAverageProductPrices,
  showMoreExpensiveProduct,
  showMoreCheapProduct,
} from './index.js';

const displayConsole = async fn => {
  console.log(await fn);
};

displayConsole(showMoreExpensiveProduct());
