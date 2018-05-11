const products = [
    {
      name: "Apple",
      status: true,
      banner: "Skrinya",
      maxPrice: 20,
      minPrice: 10,
      averagePrice: 15
    },
    {
      name: "Apricot",
      status: true,
      banner: "Ashan",
      maxPrice: 15,
      minPrice: 6,
      averagePrice: 11
    },
    {
      name: "Avocado",
      status: true,
      banner: "Blizenko",
      maxPrice: 11,
      minPrice: 7,
      averagePrice: 9
    },
    {
      name: "Banana",
      status: true,
      banner: "Roksolana",
      maxPrice: 9,
      minPrice: 2,
      averagePrice: 5
    },
    {
      name: "Blackberry",
      status: true,
      banner: "King-Kross",
      maxPrice: 6,
      minPrice: 4,
      averagePrice: 5
    }
  ];
  
  class ProductService {
    constructor() {
      this.products= products;
    }
    getProducts() {
      return this.products;
    }
  }
  
  let productService = new ProductService();
  export default productService;