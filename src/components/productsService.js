const products = [
	{
		name: "Apple",
		deleted: false,
		banner: "Silpo",
		maxPrice: 10,
		minPrice: 5,
		averagePrice: 7
	},
	{
		name: "Peanut",
		deleted: false,
		banner: "Silpo",
		maxPrice: 13,
		minPrice: 9,
		averagePrice: 11
	},
	{
		name: "Tomato",
		deleted: false,
		banner: "Silpo",
		maxPrice: 20,
		minPrice: 15,
		averagePrice: 17
	},
	{
		name: "Cucumber",
		deleted: false,
		banner: "Silpo",
		maxPrice: 5,
		minPrice: 2,
		averagePrice: 3
	},
	{
		name: "Banana",
		deleted: false,
		banner: "Silpo",
		maxPrice: 8,
		minPrice: 2,
		averagePrice: 5
	},
	{
		name: "Lemon",
		deleted: false,
		banner: "Silpo",
		maxPrice: 8,
		minPrice: 2,
		averagePrice: 5
	}
];

class ProductsService {
	constructor() {
		this.products = products;
	}
	getProduct(index) {
		return this.products[index];
	}
	getProducts() {
		return this.products;
	}
}

let productsService = new ProductsService();
export default productsService;
