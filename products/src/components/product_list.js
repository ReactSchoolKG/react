import React, {Component} from 'react';
import ProductItem from './product_item';

export default class ProductList extends Component{
	constructor(props){
		super(props);
		this.state = {
			products : ["Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant"]
		}
		this.removeItem= this.removeItem.bind(this);
	}

	removeItem(product){
		const newProducts = this.state.products
		const index = this.state.products.indexOf(product);
		newProducts.splice(index, 1);		
		this.setState({ products:newProducts}); 
	}
	render(){
		const productList= this.state.products.map((product, i) =>{
			return(
					<ProductItem
						product={product}
						key={i}
						removeItem={this.removeItem}
					/>
				);
			});
		return(
				<table>
				 <thead>
				  <tr>
				     <th>Product</th>
				     <th>Remove</th>
				  </tr>
				 </thead>	
				 <tbody>
				 	{productList}
				 </tbody>
				</table>
			);
	}

}