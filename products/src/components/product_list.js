import React, {Component} from 'react';
import ProductItem from './product_item';

export default class ProductList extends Component{
	constructor(props){
		super(props);
		this.state = {
			products : [
			{productName:"Apple",isShow:true},
			{productName:"Apricot",isShow:true},
			{productName:"Avocado",isShow:true},
			{productName:"Banana",isShow:true},
			{productName:"Bilberry",isShow:true},
			{productName:"Blackberry",isShow:true},
			{productName:"Blackcurrant",isShow:true}
			],	
			history:[]
		}
		this.removeItem= this.removeItem.bind(this);
	}

	removeItem(product){
		const newProducts = this.state.products.slice();			
		let time = new Date().toLocaleTimeString();
		const newHistoryItem={
			productName:product.productName,
			time:time,
			isRemoved:!product.isShow
		};	
		const newHistory= [...this.state.history,  newHistoryItem];
		const index = newProducts.indexOf(product);
		newProducts[index].isShow= !product.isShow;		
		this.setState({
		 products:newProducts,
		 history:newHistory
		}); 
	}

	render(){

		const productList = this.state.products.map((product, i) =>{
			return(
					<ProductItem
						product={product}
						key={i}
						removeItem={this.removeItem}
					/>
				);
			});

		const historyList =  this.state.history.map((item, index) => {
			if(!item.isRemoved){
				return <p key={index}>{`${item.productName} was removed - ${item.time}`}</p>;								
			}
			return <p key={index}>{`${item.productName} was returned - ${item.time}`}</p>;	
		})

		return(
				<div>
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
					<h2>History</h2>
					{historyList}
				</div>
		);
	}

}