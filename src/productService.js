const randomGen = () => Math.floor(Math.random() * 100) + 1;

const products = [
  {
    name: 'Apple',
    available: true,
    banner: 'Ashan',
    maxPrice: randomGen(),
    minPrice: 50
  },
  {
    name: 'Peanut',
    available: true,
    banner: 'Silpo',
    maxPrice: randomGen(),
    minPrice: 1
  },
  {
    name: 'Tomato',
    available: true,
    banner: 'Arsen',
    maxPrice: randomGen(),
    minPrice: 14
  },
  {
    name: 'Banana',
    available: true,
    banner: 'Metro',
    maxPrice: randomGen(),
    minPrice: 5
  },
  {
    name: 'Cucumber',
    available: true,
    banner: 'Ashan',
    maxPrice: randomGen(),
    minPrice: 10
  },
  {
    name: 'Lemon',
    available: true,
    banner: 'Metro',
    maxPrice: randomGen(),
    minPrice: 20
  }
];

class ProductService {
  constructor() {
    this.products = products;
  }
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products[id];
  }
}

//Create class and export like a Singleton
const productService = new ProductService();

export default productService;
