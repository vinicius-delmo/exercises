import {
  showAllProducts,
  showProductById,
  showAllCategories,
  showAllProductsInACategory,
  showProductsWithRateAbove4,
  showProductWithMostVotes,
  showAverageProductPrices,
  showMostExpensiveProduct,
  showMostCheapProduct,
} from '../index';

//Testing function showAllProducts
describe('showAllProducts', () => {
  it('should return an array of objects with all the products', async () => {
    const products = await showAllProducts();
    expect(Array.isArray(products)).toBe(true);
  });

  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showAllProducts();
    expect(result).toEqual(errorMessage);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showProductById
describe('showProductById', () => {
  it('should return a product object when id exists', async () => {
    const productId = 2;
    const product = await showProductById(productId);
    expect(typeof product).toBe('object');
    expect(product.id).toBe(productId);
  });
  it('should return an error message when id does not exist', async () => {
    const invalidId = -1;
    const result = await showProductById(invalidId);
    expect(result).toMatch('Unexpected end of JSON input');
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showProductById();
    expect(result).toEqual(errorMessage);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showAllCategories
describe('showAllCategories', () => {
  it('should return an array with all the categories', async () => {
    const products = await showAllCategories();
    expect(Array.isArray(products)).toBe(true);
  });

  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showAllCategories();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showAllProductsInACategory
describe('showAllProductsInACategory', () => {
  it('should return an array of products when the category exists', async () => {
    const category = 'jewelery';
    const products = await showAllProductsInACategory(category);
    expect(Array.isArray(products)).toBe(true);
  });

  it('Should return an empty array, when the category does not exist', async () => {
    const invalidCategory = 't-shirt';
    const result = await showAllProductsInACategory(invalidCategory);
    expect(result).toHaveLength(0);
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showAllProductsInACategory();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showProductsWithRateAbove4
describe('showProductsWithRateAbove4', () => {
  it('Should return all products with rate greater than 4', async () => {
    const minimumRate = 4;
    const result = await showProductsWithRateAbove4();
    expect(result).toEqual(
      expect.arrayContaining(
        result.filter(product => product.rating.rate > minimumRate),
      ),
    );
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showProductsWithRateAbove4();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showProductWithMostVotes
describe('showProductWithMostVotes', () => {
  it('should return the product with the most votes', async () => {
    const productWithMostVotes = await showProductWithMostVotes();
    expect(productWithMostVotes.rating.count).toBe(679);
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showProductWithMostVotes();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function displayTheAveragePriceCalculationForAllProducts
describe('showAverageProductPrices', () => {
  it('should return the average price of all products', async () => {
    const averagePrice = await showAverageProductPrices();
    expect(typeof averagePrice).toBe('number');
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showAverageProductPrices();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showMoreExpensiveProduct
describe('showMostExpensiveProduct', () => {
  it('should return the most expensive product', async () => {
    const mostExpensiveProduct = await showMostExpensiveProduct();
    expect(mostExpensiveProduct).toHaveProperty('price', 999.99);
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showMostExpensiveProduct();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

//Testing function showMoreCheapProduct
describe('showMostCheapProduct', () => {
  it('should return the cheapest product', async () => {
    const cheapestProduct = await showMostCheapProduct();
    expect(cheapestProduct).toHaveProperty('price', 7.95);
  });
  it('should return an error message in case of an error in the API call', async () => {
    const errorMessage = 'Erro: Failed to fetch';
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const result = await showMostCheapProduct();
    expect(result).toEqual(errorMessage);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});
