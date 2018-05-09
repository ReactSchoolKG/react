const list = [
  {
    name: "Apple",
    status: true,
    banner: "Silpo",
    maxPrice: 10,
    minPrice: 5,
    averagePrice: 7
  },
  {
    name: "Peanuts",
    status: true,
    banner: "Rukavuchka",
    maxPrice: 13,
    minPrice: 9,
    averagePrice: 11
  },
  {
    name: "Orange",
    status: true,
    banner: "ATB",
    maxPrice: 20,
    minPrice: 15,
    averagePrice: 17
  },
  {
    name: "Potate",
    status: true,
    banner: "Silpo",
    maxPrice: 5,
    minPrice: 2,
    averagePrice: 3
  },
  {
    name: "Cheese",
    status: true,
    banner: "ATB",
    maxPrice: 8,
    minPrice: 2,
    averagePrice: 5
  }
];

class ProductService {
  constructor() {
    this.list = list;
  }
  getProducts(id) {
    return this.list[id];
  }
}

let productService = new ProductService();
export default productService;
