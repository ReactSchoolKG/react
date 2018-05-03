import React, {Component} from 'react';
import ProductItem from './product_item';

export default class ProductList extends Component{
	constructor(props){
		super(props);
		this.state = {
			products : ["Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant"],
			temp:[],
			history:[]
		}
		this.removeItem= this.removeItem.bind(this);
	}

	removeItem(product){
		const newProducts = this.state.products.slice();
		const newTemp=this.state.temp.slice();
		const newHistory=this.state.history.slice();	
		let time = new Date().toLocaleTimeString();		
		newTemp.push(product);
		newHistory.push({
			product:product,
			time:time,
			isRemoved:true
		})
		const index = newProducts.indexOf(product);
		newProducts.splice(index, 1);		
		this.setState({
		 products:newProducts,
		 temp:newTemp,
		 history:newHistory
		}); 
	}
	returnItem(){
		const newProducts = this.state.products.slice();
		const newTemp=this.state.temp.slice();
		const newHistory=this.state.history.slice();
		let time=new Date().toLocaleTimeString();	
		let item =newTemp.pop();
	
		if (!item){
			return;
		}			
		newProducts.push(item);
		console.log(time);
		newHistory.push({
			product:item,
			time:time,
			isRemoved:false
		})					
		this.setState({
		 products:newProducts,
		 temp:newTemp,
		 history:newHistory
		});

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
					<button onClick={() => this.returnItem()}>
					  Return
					</button>
					<h2>History</h2>
					{
						this.state.history.map((item, index) => {
							if(item.isRemoved){
								return <p key={index}>{`${item.product} was removed - ${item.time}`}</p>;								
							}
							return <p key={index}>{`${item.product} was returned - ${item.time}`}</p>;	
						})

					}
				</div>
		);
	}

}