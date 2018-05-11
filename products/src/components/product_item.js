import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class ProductItem extends Component{
	render(){
		
		let product=this.props.product;

		return(
				<tr>
				   <td>{product.status && product.name}</td>
				   <td>
				   	<button onClick={() => this.props.removeItem(product)}>
				   	  {product.status ? "Remove" : "Return"}
				   	</button>
				   </td>
					 <td>
					 	<Link to={"/products/" + this.props.id} >Details</Link>
				   </td>
				</tr>
		);

	}
}