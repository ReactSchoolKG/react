class ProductService {
  constructor() {
    this.products = [
      {
        name: 'laptop',
        desc: 'cool laptop',
        price: 258,
        id: 1
      },
      {
        name: 'computer',
        desc: 'cool computer',
        price: 274,
        id: 2
      },
      {
        name: 'phone',
        desc: 'cool phone',
        price: 100,
        id: 3
      },
      {
        name: 'radio',
        desc: 'cool radio',
        price: 5,
        id: 4
      }
    ];
  }

  getProducts(){
    return this.products;
  }
}

const productList = new ProductService().getProducts();

export default productList;